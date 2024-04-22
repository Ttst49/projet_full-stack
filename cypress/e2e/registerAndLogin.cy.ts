describe('register a user and try to log it in', () => {
  it('log in a user from request', function () {
    function makeid(length:number) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    const email = makeid(5)+"@mail.com"
    const password = makeid(10)
    cy.register(email,password)
    cy.login(email,password)
  })
})