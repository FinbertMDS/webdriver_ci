import constants from '../../constants';
import CandyPage from '../pageobjects/candy.page';
import LoginPage from '../pageobjects/login.page';

describe('CoinGecko', () => {
    it('should collect candy', async () => {
        await LoginPage.open();
        await LoginPage.login(constants.CG_USERNAME, constants.CG_PASSWORD);
        await CandyPage.open();
        await browser.pause(10000);
        if (await CandyPage.collectCandyButton.isExisting()) {
            await CandyPage.collectCandyButton.click();
            console.log('collected candies');
        }
    });
});


