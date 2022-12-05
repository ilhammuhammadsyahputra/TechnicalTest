//import elements from "../../../../support/store-v2/prius/general/elements"
const data = require(`../../fixtures/Set.js`)


describe('Login', function () {
    beforeEach('login as buyer', function () {
       cy.Login(data.url, data.User, data.userPassword)
    })

    it('BelanjaStock', function () {
      cy.BelanjaStock()
   })
    
})