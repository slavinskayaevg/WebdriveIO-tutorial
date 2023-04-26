describe("Advanced Testing", () => {

    beforeEach(async () => {
        await browser.url("https://the-internet.herokuapp.com/upload")
    })

   it("File upload", async () => {
        //await browser.url("https://the-internet.herokuapp.com/upload")

        const filePath = "./my-screenshot.png"
        const remoteFilePath = await browser.uploadFile(filePath)

        await $("#file-upload").setValue(remoteFilePath)
        await $('#file-submit').click()
        await browser.pause(2000)
    })

    it("File upload", async () => {
       // await browser.url("https://the-internet.herokuapp.com/upload")

        const filePath = "./my-screenshot.png"
        const remoteFilePath = await browser.uploadFile(filePath)

        await $("#file-upload").setValue(remoteFilePath)
        await $('#file-submit').click()
        await browser.pause(2000)
    })

    it("File upload 3", async () => {
        //await browser.url("https://the-internet.herokuapp.com/upload")

        const filePath = "./my-screenshot.png"
        // const remoteFilePath = await browser.uploadFile(filePath)

        // await $("#file-upload").setValue(remoteFilePath)
        // await $('#file-submit').click()
        await browser.customFileUpload(filePath)
        await browser.pause(2000)
    })

    it('Display Title and Url', async () => {
        const results = await browser.getTitleAndUrl()
        console.log("TITLE = " + results.title)
        console.log("URL = " + results.url)

        await browser.waitAndClick('#file-submit')
        await browser.pause(5000)
    })

    it("Session reload", async () => {
        console.log("SESSION BEFORE LOAD IS "+ browser.sessionId)
        await browser.reloadSession()
        console.log("SESSION AFTER RELOAD" + browser.sessionId)
    })

    it("Create and Switch new Window", async () => {
        await browser.url("https://google.com")
        await browser.newWindow("https://webdriver.io")
        await browser.pause(5000)
        await browser.switchWindow('google.com')
        await browser.pause(5000)
    })

    it('Network Throttle', async () => {
        await browser.throttle('Regular2G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)

        await browser.throttle('Regular4G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)

        
    })
    it("network throttle #2", async () => {
        await browser.throttle('offline')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)
    })

    it.only('Execute JavaScript code', async () => {
        const result = await browser.execute(
            (a, b) => { return a + b}, 
            5, 10
        )
        await expect(result).toBe(15)
    })

    it.only("execute JS async code", async () => {
        const result = await browser.executeAsync(
            (a, b, done) => {

            setTimeout( () => {
                done(a + b)
            }, 3000)
        },
            5, 10)
        
    
        await expect(result).toBe(15)
    })

})


