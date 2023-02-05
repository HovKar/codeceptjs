const { test } = require('@playwright/test');
const { expect } = require('chai');
import { waitAndClick } from '../helper';

test.describe('demo for playwright', () => {

  test('Test case 1', async({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await waitAndClick(page, 'input[value="radio2"]')
    await waitAndClick(page, 'input[value="option1"]')
    await page.type('input[id="name"]', 'John');
    const name = await page.$eval('input[id="name"]', (el) => el.value);
    expect(name).to.equal('John');
  });
});