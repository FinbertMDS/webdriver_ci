import config from '../../config';
import cgCandyScreen from '../screenobjects/coingecko/cg.candy.screen';
import cgFirststartScreen from '../screenobjects/coingecko/cg.firststart.screen';
import cgLoginScreen from '../screenobjects/coingecko/cg.login.screen';

describe('CoinGecko', () => {
    before(async () => {
        await driver.activateApp(config.COINGECKO_APP_ID);
        await driver.pause(5000);
    })

    async function handleFirstTimeLogin () {
        await cgFirststartScreen.waitForIsShown();
        await (await cgFirststartScreen.loginButton).click();
    }

    it('should collect candy', async () => {
        await handleFirstTimeLogin();

        await cgLoginScreen.login(config.CG_USERNAME, config.CG_PASSWORD);
        await cgLoginScreen.handleAfterLogin();

        await cgCandyScreen.handleClickCandyButton();
    });
});


