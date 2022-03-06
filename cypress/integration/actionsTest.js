describe("Perform actions in Profile Card", () => {
    it("Loads page", () => {
        cy.visit("http://127.0.0.1:5500/src/index.html");
    });

    it("Toggle click", () => {
        cy.get("profile-card").shadow().find("input").click({ force: true });
    })

    it("Toggle click again", () => {
        cy.log("Waiting...");
        cy.wait(1000);
        cy.get("profile-card").shadow().find("input").click({ force: true });
    })

    it("Button click", () => {
        cy.log("Waiting...");
        cy.wait(1000);
        cy.get("[slot='button']").click();
    });
});