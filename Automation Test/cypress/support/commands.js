import elements from "./elements.js"

Cypress.Commands.add('Login', (url, User, userPassword) => {
    cy.visit(url)
    cy.get(elements.LoginPage_InputNumberPhone).should('be.visible').type(User)
    cy.get(elements.LoginPage_InputPassword).should('be.visible').type(userPassword)
    cy.get(elements.Botton_login).should('be.visible').click()

})

Cypress.Commands.add('BelanjaStock', () => {
    cy.contains('Belanja Stok').should('be.visible').click()
    cy.contains('Mie Goreng').should('be.visible').click()
    //cy.get(elements.Tambah_Cart).should('be.visible').click()
    cy.get('.addCartButton').should('be.visible').click()
    cy.contains('Lihat Keranjang').should('be.visible').click()
    cy.contains('Pilih jasa pengiriman').should('be.visible').click()
    cy.contains('Kurir Toko').should('be.visible').click()
    cy.get(elements.Botton_Bayar).should('be.visible').click()
    cy.contains('Bayar').should('be.visible').click()
    cy.get(elements.Payment_botton).should('be.visible').click()
    cy.contains('Check Status').should('be.visible').click()
   
})

Cypress.Commands.add('Transaksi', () => {
    cy.contains('Transaksi').should('be.visible').click()
    cy.get(elements.Button_Mutation).should('be.visible').click() //Desember
    cy.contains('November').should('be.visible').click()
    cy.contains('October').should('be.visible').click()
    cy.contains('September').should('be.visible').click()
   
})

Cypress.Commands.add('Analisis', () => {
    cy.contains('Analisis Produk').should('be.visible').click()
   
})

Cypress.Commands.add('Upgrade', () => {
    cy.contains('Upgrade Akun').should('be.visible').click()
    cy.get(':nth-child(1) > .footerContent > .btnPackage > .text').should('be.visible').click()
    cy.get('.button > .text').should('be.visible').click()
    cy.get('.checkbox-empty').should('be.visible').click()
    cy.get(':nth-child(4) > .checkoutBtn').should('be.visible').click()
    cy.get('.paymentBody > :nth-child(1) > :nth-child(2)').should('be.visible').click()
    cy.get('.buttonRefresh').should('be.visible').click()
   
})