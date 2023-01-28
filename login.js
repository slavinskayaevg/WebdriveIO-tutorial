describe.skip('Login flow', () => {
    before(async () => {
    await browser.url('http://zero.webappsecurity.com/index.html')
})

it("NO login (invalid credentials)", async () => {
 await browser.waitAndClick('#signin_button')
 await $('#login_form').waitForDisplayed()
 await $('#user_login').setValue('test') 
 await $('#user_password').setValue('test') 
 await $('input[type="submit"]').click()
 const errorMessage = await $(".alert-error")
 await expect(errorMessage).toHaveTextContaining("Login and/or password are wrong.")
})

it("Reset Account Password", async () => {
 const email = "test@test.com"
 
 await browser.waitAndClick('*=Forgot')
 await $('#user_email').waitForDisplayed()
 await $('#user_email').setValue(email)
 await $('input[type="submit"]').click()
 
 const message = await $('.span6')
 await expect(message).toHaveTextContaining(`email: ${email}`)
})
 


})