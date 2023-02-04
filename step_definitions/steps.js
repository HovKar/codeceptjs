const { I } = inject();
const chai = require('chai');
const expect = chai.expect;
// Add in your custom step files


Given('I am on a page with a name field', () => {
  I.amOnPage('https://rahulshettyacademy.com/AutomationPractice/')
  I.see('Practice Page')
});

When('I fill the name field with {string}', (name) => {
  I.fillField('#name', name)
});

Then('The name field should contain the value {string}', async(expectedValue) => {
  const actualValue = I.grabValueFrom('#name');
  expect(await I.grabValueFrom('#name')).to.equal(expectedValue)
});
