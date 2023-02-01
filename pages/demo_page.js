const { I } = inject();

module.exports = {
  countryLocator: '#autocomplete',
  async selectingCountry(){
    I.fillField(this.countryLocator,'austra')
    const ele = await locate('#ui-id-1 > li:nth-child(1)').withText('Australia')
    I.click(ele)
  }
}
