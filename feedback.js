describe.skip("Feedback form", () => {
    it("Submiting the form", async () => {
        const name = "Peter"
        const email = "test@test.com"
        const subject = "subject"
        const message = 'my message'

        await browser.url('http://zero.webappsecurity.com/index.html')
        await browser.waitAndClick('#feedback')

        await $('#name').setValue(name)
        await $('#email').setValue(email)
        await $('#subject').setValue(subject)
        await $('#comment').setValue(message)

        await $('input[type="submit"]').click()

        await expect(browser).toHaveUrlContaining('sendFeedback.html')
    })
})