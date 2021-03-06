describe("My Testimonals", function () {
  const testimonials = "section.Testimonials article";
  const api = {
    method: "GET",
    pathname: "/api/v2/hiring/testimonials",
  };

  beforeEach(function () {
    cy.visit("/");
  });

  it("should display 20 testimonials", function () {
    cy.get(testimonials).should("have.length", 20);
  });

  it("should display only testimonials of a selected track", function () {
    cy.intercept({ ...api, query: { track: "javascript" } }).as("api-call");
    cy.get(".TrackSelector")
      .click()
      .within(() => {
        cy.contains("JavaScript").click();
      });
    cy.wait("@api-call");
    cy.get(testimonials)
      .should("have.length", 20)
      .each(($testimonial) => {
        cy.wrap($testimonial).find("h6").contains("JavaScript");
      });
  });

  it("should display ordered results", function () {
    cy.intercept({ ...api, query: { order: "oldest_first" } }).as("api-call");

    cy.get("time")
      .first()
      .should("have.attr", "time")
      .then(Date.parse)
      .as("newest_time");

    cy.get(".OrderSelector")
      .click()
      .within(() => {
        cy.contains("least").click();
      });
    cy.wait("@api-call");
    cy.get("time")
      .first()
      .should("have.attr", "time")
      .then(Date.parse)
      .should((oldestTime) => {
        cy.get("@newest_time").should("be.gt", oldestTime);
      });
  });

  it("should filter by exercise", function () {
    cy.intercept({ ...api, query: { exercise: "bob" } }).as("api-call");
    cy.get("section.Testimonials header input").focus().type("bob");
    cy.wait("@api-call");
    cy.get(testimonials)
      .should("have.length", 20)
      .each(($testimonial) => {
        cy.wrap($testimonial).find("h6").contains("Bob");
      });
  });

  describe("pagination", function () {
    beforeEach(function () {
      cy.intercept(api).as("api-call");
    });

    it("should display the next and previous pages", function () {
      cy.get(".PageNavigation button.right").click();

      cy.wait("@api-call").its("request.url").should("contain", "page=2");
      cy.get(".PageNavigation b").should("contain", "2");

      cy.get(".PageNavigation button.left").click();

      cy.wait("@api-call").its("request.url").should("contain", "page=1");
      cy.get(".PageNavigation b").should("contain", "1");

      cy.get(".PageNavigation button.left").should("be.disabled");
    });

    it("next button should be disabled in the last page", function () {
      cy.get(".PageNavigation > a:last-of-type").click();
      cy.get(".PageNavigation button.right").should("be.disabled");
    });

    it("should jump to the selected page", function () {
      cy.get(".PageNavigation a").contains("3").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=3");

      cy.get(".PageNavigation a").contains("5").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=5");

      cy.get(".PageNavigation a").contains("7").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=7");

      cy.get(".PageNavigation a").contains("3").should("not.exist");
    });

    it("should reset the page on a new filter", function () {
      cy.get(".PageNavigation a").contains("3").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=3");

      cy.get(".TrackSelector")
        .click()
        .within(() => {
          cy.contains("Rust").click();
        });

      cy.wait("@api-call").its("request.url").should("not.contain", "page=");
    });

    it("should keep track selection and exercise filter on page changes", function () {
      cy.get(".TrackSelector")
        .click()
        .within(() => {
          cy.contains("Rust").click();
        });
      cy.wait("@api-call");

      cy.get("section.Testimonials header input").focus().type("sub");
      cy.wait("@api-call");

      cy.get(".PageNavigation a").contains("2").click();
      cy.wait("@api-call")
        .its("request.url")
        .should("contain", "track=rust", "same track")
        .and("contain", "exercise=sub", "same exercise")
        .and("contain", "page=2", "new page");
    });
  });
});
