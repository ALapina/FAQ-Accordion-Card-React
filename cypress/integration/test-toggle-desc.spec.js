/* eslint-disable */

describe("Answer can be open", () => {
  it("First answer is not visible by default, and visible after click", () => {
    cy.visit("http://localhost:3000/");

    //first answer is not visible by default
    cy.get("[data-qa=faq__desc]").first().should("not.be.visible");

    // click on a first question
    cy.get("[data-qa=faq__question-button]").first().click();

    //answer should be visible and have a class show-description
    cy.get("[data-qa=faq__desc]")
      .first()
      .should("have.class", "show-description");
    cy.get("[data-qa=faq__desc]").first().should("be.visible");

    //click on a second question again
    cy.get("[data-qa=faq__question-button]").eq(1).click();

    //second answer should be visible and have a class show-description
    cy.get("[data-qa=faq__desc]")
      .eq(1)
      .should("have.class", "show-description");
    cy.get("[data-qa=faq__desc]").eq(1).should("be.visible");

    //and first answer should be not visible
    cy.get("[data-qa=faq__desc]")
      .first()
      .should("not.have.class", "show-description");
    cy.get("[data-qa=faq__desc]").first().should("not.be.visible");
  });
});
