describe("Show Texts inside Profile Card", () => {
    it("Loads page", () => {
        cy.visit("http://127.0.0.1:5500/src/index.html");
    });

    it("Should show Profile Card element", () => {
        cy.get("profile-card");
    });

    it("Job title should be UI/Fullstack Developer at Oracle", () => {
        cy.get("[slot='jobTitle']").should((elem) => {
            expect(elem.text()).to.equal('UI/Fullstack Developer at Oracle');
        });
    });

    it("Email's text should be Email: gabschlam@gmail.com", () => {
        cy.get("[slot='email']").should((elem) => {
            expect(elem.text()).to.equal('Email: gabschlam@gmail.com');
        });
    });

    it("Age's text title should be Age: 24 years old", () => {
        cy.get("[slot='age']").should((elem) => {
            expect(elem.text()).to.equal('Age: 24 years old');
        });
    });

    it("Description should be I'm a web developer from Mexico who love JS/HTML/CSS and enjoying the moment.", () => {
        cy.get("[slot='description']").should((elem) => {
            expect(elem.text()).to.equal("I'm a web developer from Mexico who love JS/HTML/CSS and enjoying the moment.");
        });
    });

    it("Button's text should be Contact me", () => {
        cy.get("[slot='button']").should((elem) => {
            expect(elem.text()).to.equal('Contact me');
        });
    });
});
