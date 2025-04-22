///  <reference types="cypress"/>

describe("Testes para a Agenda de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app")
  })

  it("Deve adicionar um contato", () => {
    cy.get('input[type="text"]').type("Luiz Carlos")
    cy.get('input[type="email"]').type("luizcarlos@teste.com")
    cy.get('input[type="tel"]').type("64123456789")
    cy.get(".adicionar").click()

    cy.contains("Luiz Carlos").should("exist")
  })

  it("Deve editar um contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click()
    cy.get('input[type="text"]').clear().type("Gian Souza")
    cy.get('input[type="tel"]').clear().type("11912345668")
    cy.get(".alterar").click()

    cy.contains("Gian Souza").should("exist")
  })

  it("Deve excluir um contato", () => {
    cy.get(":nth-child(5) > .sc-gueYoa > .delete").click()

    cy.contains("Luiz Carlos").should("not.exist")
  })
})
