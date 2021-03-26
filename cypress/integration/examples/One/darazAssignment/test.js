/// <reference types= "Cypress"/>

const { contains } = require("cypress/types/jquery");
describe("darazAssignment", () => {
    beforeEach(() => {
      cy.visit("https://www.daraz.com.np/");
    });
  
    it("SignIn", () => {
      cy.get("#anonLogin").click();
      cy.get("input[type=text]").type("iamkarishma1@gmail.com");
      cy.get("input[type=password]").type("Test@123");
      cy.get("button[type=submit]").click(); // cy.get('button[text()=LOGIN]').click();
    });
})