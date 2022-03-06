describe("Show Profile Card Elements", () => {
    it("Loads page", () => {
        cy.visit("http://127.0.0.1:5500/src/index.html");
    });

    it("Should show Profile Card element", () => {
        cy.get("profile-card");
    });

    it("Should get job title inside profile card element", () => {
        cy.get("[slot='jobTitle']");
    });

    it("Should get email inside profile card element", () => {
        cy.get("[slot='email']");
    });

    it("Should get age inside profile card element", () => {
        cy.get("[slot='age']");
    });
    
    it("Should get description inside profile card element", () => {
        cy.get("[slot='description']");
    });

    it("Should get button inside profile card element", () => {
        cy.get("profile-card").shadow().find("button");
    });
});
