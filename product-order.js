describe("Product order", () => {
    before(async () => {
        //login
       await browser.url("https://www.saucedemo.com/")
       await browser.sauceLogin()
    })
    
    after(async () => {
        //log out
        await browser.sauceLogout()
    })

    it("Product order", async () => {
        await $('#inventory_container').waitForDisplayed()
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await $('.shopping_cart_link').click()
        await $('.cart_list').waitForDisplayed()
        await $('[data-test="checkout"]').click()
        
        const firstName = "Peter";
        const lastName = "AAA"
        const postalCode = "123"

        await $('.checkout_info').waitForDisplayed()
        await $('[data-test="firstName"]').setValue(firstName)
        await $('[data-test="lastName"]').setValue(lastName)
        await $('[data-test="postalCode"]').setValue(postalCode)
        await $('[data-test="continue"]').click()

        await $('.cart_list').waitForDisplayed()
        await $('.summary_info').waitForDisplayed()

        await $('[data-test="finish"]').click()

        const message = await $('.complete-header')
        await expect(message).toHaveTextContaining("THANK YOU FOR YOUR ORDER")




    })
})