/// <reference types= "Cypress"/>

const { contains } = require("cypress/types/jquery");

describe("Oliz Store ",() => {
beforeEach(()=>{
  cy.visit("https://www.daraz.com.np/shop/oliz-store/")
})

});
// it('Verify URL Visit',()=>{
//     cy.url().should('contain','https://www.daraz.com.np/catalog/?q=oliz+store');
// });
// it("Search Oliz store", () => {
//     cy.get("#q").type("oliz store").type("{enter}");
//   });

// it('Free Delivery',()=> {
//     cy.get('span[text()=Free Delivery]').click();
// })

// it('Search for item',()=>{
//     cy.get('#q').type('camera').type('{enter}');
//     cy.get('div#root>div>div:nth-of-type(2)>div>div>div>div:nth-of-type(2)>div:nth-of-type(5)>div>div>div:nth-of-type(2)>div:nth-of-type(2)>a');
//     cy.get('//span[text()=Shop Now]').click();

// })

// beforeEach(()=>{
//     cy.visit('https://www.daraz.com.np/');
// });

//  it("SignIn", () => {
//    cy.get("#anonLogin").click();
//    cy.get("input[type=text]").type("iamkarishma1@gmail.com");
//    cy.get("input[type=password]").type("Test@123");
//    cy.get("button[type=submit]").click(); // cy.get('button[text()=LOGIN]').click();
// //  });
// it.only('Message the seller',()=>{
//     // cy.get('button#checkout').scrollIntoView().should('be.visible')

//     cy.get('div[text()=Messages]').click();


// })
// });

//           it("SignIn", () => {
//             cy.get("#anonLogin").click();
//             cy.get("input[type=text]").type("iamkarishma1@gmail.com");
//             cy.get("input[type=password]").type("Test@123");
//             cy.get("button[type=submit]").click(); // cy.get('button[text()=LOGIN]').click();
//           });

//     it('is redirected to the login page on log out', () => {
//       cy.contains('Logout')
//         .should('be.visible')
//         .click()

//       cy.url()
//         .should('be.equal', 'https://example.com/login')
//     })
//   })

// beforeEach()
