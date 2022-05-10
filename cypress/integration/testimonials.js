describe("My Testimonals", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("section.Testimonials article").as("testimonials");
  });

  it("should display 20 testimonials");
  it("should display only testimonials of a selected track");
  it("should display ordered results");
  it("should filter by exercise");

  describe("pagination", () => {
    it("should display the next and previous pages");
    it("should jump to the selected page");
    it("should reset the page on a new filter");
  });
});
