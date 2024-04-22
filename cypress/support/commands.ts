/// <reference types="cypress" />

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
     namespace Cypress {
        interface Chainable<Subject> {
            login: typeof login
            register: typeof register
        }
}

}

export function login(email: string, password: string) {
    cy.session(
        email,
        ()=>{
            cy.visit("/login")
            cy.get("#email").type(email)
            cy.get("#password").type(password,{log:false})
            cy.get('.submit-button').click()
            cy.wait(2000)
            cy.visit("/profile")
            cy.url().should('include',"profile")
            cy.contains(email)
        },
        {
            validate:()=>{
                cy.getAllLocalStorage().then(()=>{
                    expect(localStorage.getItem("bearerToken")).not.to.be.null
                })
            }
        }
    )
    cy.visit("/")

}

export function register(email: string, password: string) {
    cy.visit("/register")
    cy.get("#email").type(email)
    cy.get("#password").type(password,{log:true})
    cy.get("#dropdown").select(2)
    cy.get(".submit-button").click()
    cy.wait(2000)
}



Cypress.Commands.add("login",login)
Cypress.Commands.add("register",register)