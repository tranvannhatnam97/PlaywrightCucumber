import { chromium, Page, Browser, webkit, expect } from "@playwright/test"
export class LoginPage {
    username_input
    passwoord_input
    constructor(page) {
        page.goto("https://test-org.ichiba.net/vi/")
        this.username_input = page.locator('#txt_email')
        this.passwoord_input = page.locator('#input_password')
    }
    async fill_username(username) {
        this.username_input.type(username)
    }
    async fill_password(password) {
        this.passwoord_input.type(password)
    }
}