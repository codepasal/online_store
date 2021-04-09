/// <reference types= "Cypress"/>

// const { contains } = require("cypress/types/jquery");

describe("Oliz Store ", () => {
  before(() => {
    cy.visit("https://www.daraz.com.np/shop/oliz-store/");
  });

  it("Verify URL Visit", () => {
    cy.url().should(
      "contain",
      "https://www.daraz.com.np/catalog/?q=oliz+store"
    );
  });
  it.only("Search Oliz store", () => {
    cy.get("#q").type("oliz store").type("{enter}");
  });

  it("Free Delivery", () => {
    cy.get("span[text()=Free Delivery]").click();
  });

  it("Search for item", () => {
    cy.get("#q").type("camera").type("{enter}");
    cy.get(
      "div#root>div>div:nth-of-type(2)>div>div>div>div:nth-of-type(2)>div:nth-of-type(5)>div>div>div:nth-of-type(2)>div:nth-of-type(2)>a"
    );
    cy.get("//span[text()=Shop Now]").click();
  });

  it("Message the seller", () => {
    // cy.get('button#checkout').scrollIntoView().should('be.visible')

    cy.get("div[text()=Messages]").click();
  });
});
