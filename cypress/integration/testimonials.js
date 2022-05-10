describe("My Testimonals", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("section.Testimonials article").as("testimonials");
  });

  it("should display 20 testimonials", () => {
    cy.get("@testimonials").should("have.length", 20);
  });

  it("should display only testimonials of a selected track", () => {
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
    cy.get("@testimonials").each(($testimonial) => {
      cy.wrap($testimonial).get("h6").contains("JavaScript");
    });
  });

  it("should display ordered results");
  it("should filter by exercise");

  describe("pagination", () => {
    it("should display the next and previous pages");
    it("should jump to the selected page");
    it("should reset the page on a new filter");
  });
});
