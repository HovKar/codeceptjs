export const waitAndClick = async (page, xpath) => {
    await page.waitForSelector(xpath);
    await page.locator(xpath).first().click();
}


