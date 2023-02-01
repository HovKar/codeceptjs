const chai = require('chai');
const expect = chai.expect;

Feature('demo for codeseptjs');

  Scenario('Test case 1',  async({ I }) => {
    I.amOnPage('https://rahulshettyacademy.com/AutomationPractice/')
    I.see('Practice Page')
    I.checkOption('Radio2')
    I.checkOption('Option1')
    I.selectOption('#dropdown-class-example', 'Option2')
    I.fillField('#name', 'John')
    expect(await I.grabValueFrom('#name')).to.equal('John')
});

Scenario('Test case 2', async({ I, Test }) => {
    I.amOnPage('https://rahulshettyacademy.com/AutomationPractice/')
    I.see('Practice Page')
    Test.selectingCountry()

} )

