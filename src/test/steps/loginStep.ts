import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, webkit, expect, firefox } from "@playwright/test"

let browser: Browser
let page: Page
Given('I go to {string}', { timeout: 15000 }, async function (url) {
    browser = await webkit.launch({ headless: false })
    page = await browser.newPage()
    await page.goto(url)
    await expect(page).toHaveTitle("Login")
});
When('I enter username as {string}', { timeout: 9000 }, async function (username) {
    await page.locator('#txt_email').type(username)
});

When('I enter password as {string}', { timeout: 2000 }, async function (password) {
    await page.locator('#input_password').type(password)
});

When('I click button Login', async function () {
    await page.locator('#btn_submit').click()
});

Then('I navigate to HomePage successfully', { timeout: 9000 }, async function () {
    await expect(page).toHaveTitle("iChiba Global")
    await page.waitForTimeout(5000)
    await page.close()
    await browser.close()
});

Then('I navigate to HomePage failed', { timeout: 9000 }, async function () {
    await expect(page).not.toHaveTitle("iChiba Global")
    await page.waitForTimeout(5000)
    await page.close()
    await browser.close()
})
