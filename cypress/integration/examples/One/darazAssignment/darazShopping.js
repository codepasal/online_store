/// <reference types= "Cypress"/>

// const { get } = require("cypress/types/lodash");

// describe("darazAssignment", () => {
//   beforeEach(() => {
//     cy.visit("https://www.daraz.com.np/");
//   });

describe("darazAssignment", () => {
  it("SignIn", () => {
    cy.visit("https://www.daraz.com.np/");
    cy.get("#anonLogin").click();
    cy.get("input[type=text]").type("iamkarishma1@gmail.com");
    cy.get("input[type=password]").type("Test@123");
    cy.get("button[type=submit]").click(); // cy.get('button[text()=LOGIN]').click();
    cy.wait(5000);
  });

  it("Search for Mobile", () => {
    // cy.visit("https://www.daraz.com.np/");
    cy.viewport(1200, 1000);
    cy.wait(5000);
    cy.get("#q").type("mobile").type("{enter}").should("be.visible");
    cy.get(".search-box__button--1oH7").click();

    cy.wait(6000);
  });

  it("Search with Brand filter", () => {
    cy.viewport(1200, 1000);
    cy.wait(6000);

    cy.get(
      ":nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(6000);
    cy.get(".c2Lu3x").should("be.visible");
  });

  it("Search with Service filter", () => {
    cy.viewport(1200, 1000);
    cy.get(
      ":nth-child(3) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input"
    );
    cy.wait(6000);
    // cy.get("div[text()=Service]")
    //   .select("Cash on Delivery")
    //   .should("have.value", "Cash on Delivery");
  });

  it("Adding search item in cart", () => {
    cy.get(
      '[data-item-id="105052494"] > .c3e8SH > .c5TXIP > .c2iYAv > .cRjKsc > a > .c1ZEkM'
    ).click();
    cy.url().should("eq","https://www.daraz.com.np/products/samsung-galaxy-m02s-65-hd-display-with-5000-mah-battery-i105052494-s1026726988.html?spm=a2a0e.searchlist.list.1.4dd5a157LwDRuO&search=1")
    cy.get(".pdp-button_theme_orange > .pdp-button-text > span").click();
    });
   it("Go to cart and remove from cart", () => {
      cy.visit("https://cart.daraz.com.np/cart");
      cy.wait(6000);
      cy.get(".checkbox-wrap > .next-checkbox > input").click();
      cy.wait(6000);
      cy.get(".btn-wrap > .lazada").click();
      cy.wait(6000);
      cy.get(".list-header-operation-text").click();
      cy.wait(6000);
      cy.get(".ok");
    });
  });


// Ignore text below//
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
