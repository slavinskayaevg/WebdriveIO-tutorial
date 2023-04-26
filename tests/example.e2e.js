describe('My first test suite', () => {
    it('my first wdio test', async () => {
        let myUrl = "https://www.example.com"
        let smallPause = 2000;
        let bigPause = 5000;
       await browser.url(myUrl)
       await browser.pause(smallPause)

    
       await expect(browser).toHaveTitleContaining("Example Domain")
       await expect(browser).toHaveUrlContaining("example.com")

       let pageElement = await $("h1")
       await expect(pageElement).toExist()
       await expect(pageElement).toBeDisplayed()
       await expect(pageElement).toHaveTextContaining("Example")

    })

    it("Forms and inputs", async () => {
        await browser.url("https:/www.saucedemo.com/")

        let usernameInput = await $('#user-name')
        let passwordInput = await $("#password")
        let loginButton = await $("#login-button")
        

        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('secret_sauce')
        await loginButton.click()

        let inventoryContainer = await $('#inventory_container')
        await expect(inventoryContainer).toBeDisplayed()
    })

    it("Select and Check boxes", async () => {
        await browser.url("https://devexpress.github.io/testcafe/example/")

        let selectbox = await $('#preferred-interface')
        await selectbox.selectByVisibleText('Both')

        let option = await $('option=Both')
        await expect(option).toBeSelected()
    })

    it("Set browser window size", async () => {
        await browser.setWindowSize(400, 400)
        await browser.url('https://www.example.com')

        let selector = await $('h1')
        await selector.waitForExist()
        await selector.waitForDisplayed()
    })

    it("Screenshots", async () => {
        await browser.url('https://www.example.com')
        await browser.saveScreenshot('my-screenshot.png')
        
    })
})

