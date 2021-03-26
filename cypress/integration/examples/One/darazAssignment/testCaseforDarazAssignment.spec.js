/// <reference types= "Cypress"/>

// const { get } = require("cypress/types/lodash");

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

  it("Search for Mobile", () => {
    cy.wait(2000);
    cy.get("#q").type("mobile"); //.type('{enter}')
    // should('be.visible')
    cy.get(".search-box__button--1oH7").click();
  });
  it("Search with Brand filter", () => {
    cy.wait(2000);
    // cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    cy.get(
      ":nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input"
    )
      // cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
      // // cy.get("div[@data-spm-anchor-id='a2a0e.searchlist.filter.i0.1f9a2911EQFLqm")
      .click();
    cy.wait(2000);
    cy.get(".c2Lu3x").should("be.visible");
  });

  it("Search with Service filter", () => {
    cy.get(':nth-child(3) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    // cy.get("div[text()=Service]")
    //   .select("Cash on Delivery")
    //   .should("have.value", "Cash on Delivery");
  });

  it("Adding search item in cart", () => {
    cy.get(".img[@class=c1ZEkM]").eq().click();
    cy.url().should(
      "eq",
      "https://www.daraz.com.np/products/samsung-s20-fe-65-full-hd-amoled-display-8-gb-ram-128-gb-i104632969-s1025950332.html?spm=a2a0e.searchlist.list.1.1f9a2911EQFLqm&search=1"
    );
    cy.get(".pdp-button_theme_orange pdp-button_size_xl").click();
  });
});

// it.only
// this.skip();
// cy.viewport(1900, 1200);
// cy.wait(5000);

// type('{enter}');
// cy.wait(20000);

// cy.get("button[text()='SEARCH']").click(); -- Xpath !!!

// });

// it('Select for the result and add in cart')
// cy.get('img[@alt=Samsung Galaxy M01s (3GB Ram, 32GB Rom)]').click();
// .select("Samsung")
// .invoke('val')
// .should("have.value", "Samsung")
