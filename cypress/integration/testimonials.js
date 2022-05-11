describe("My Testimonals", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.get("section.Testimonials article").as("testimonials");
  });

  it("should display 20 testimonials", function () {
    cy.get("@testimonials").should("have.length", 20);
  });

  it("should display only testimonials of a selected track", function () {
    cy.intercept({
      method: "GET",
      pathname: "/api/v2/hiring/testimonials",
      query: { track: "javascript" },
    }).as("api-call");
    cy.get(".TrackSelector")
      .click()
      .within(() => {
        cy.contains("JavaScript").click();
      });
    cy.wait("@api-call");
    cy.get("@testimonials")
      .should("have.length", 20)
      .each(($testimonial) => {
        cy.wrap($testimonial).find("h6").contains("JavaScript");
      });
  });

  it("should display ordered results", function () {
    cy.intercept({
      method: "GET",
      pathname: "/api/v2/hiring/testimonials",
      query: { order: "oldest_first" },
    }).as("api-call");

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
    cy.intercept({
      method: "GET",
      pathname: "/api/v2/hiring/testimonials",
      query: { exercise: "bob" },
    }).as("api-call");
    cy.get("section.Testimonials header input").focus().type("bob");
    cy.wait("@api-call");
    cy.get("@testimonials")
      .should("have.length", 20)
      .each(($testimonial) => {
        cy.wrap($testimonial).find("h6").contains("Bob");
      });
  });

  describe("pagination", function () {
    it("should display the next and previous pages", function () {
      cy.intercept({
        method: "GET",
        pathname: "/api/v2/hiring/testimonials",
      }).as("api-call");

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
      cy.intercept({
        method: "GET",
        pathname: "/api/v2/hiring/testimonials",
      }).as("api-call");

      cy.get(".PageNavigation a").contains("3").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=3");

      cy.get(".PageNavigation a").contains("5").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=5");

      cy.get(".PageNavigation a").contains("7").click();
      cy.wait("@api-call").its("request.url").should("contain", "page=7");

      cy.get(".PageNavigation a").contains("3").should("not.exist");
    });

    it("should reset the page on a new filter");
  });
});
