describe("Show Profile Card Elements", () => {
    it("Loads page", () => {
        cy.visit("http://127.0.0.1:5500/src/index.html");
    });

    it("Should show Profile Card element", () => {
        cy.get("profile-card");
    });

    it("Name element exists inside Profile Card element", () => {
        cy.get("profile-card").invoke('attr', 'name');
    });

    it("Image element exists inside Profile Card element", () => {
        cy.get("profile-card").invoke('attr', 'img');
    });

    it("Link for button exists inside Profile Card element", () => {
        cy.get("profile-card").invoke('attr', 'buttonLink');
    });

    it("Job title element exists inside Profile Card element", () => {
        cy.get("[slot='jobTitle']");
    });

    it("Email element exists inside Profile Card element", () => {
        cy.get("[slot='email']");
    });

    it("Age element exists inside Profile Card element", () => {
        cy.get("[slot='age']");
    });
    
    it("Description element exists inside Profile Card element", () => {
        cy.get("[slot='description']");
    });

    it("Button element exists inside Profile Card element", () => {
        cy.get("profile-card").shadow().find("button");
    });
});
