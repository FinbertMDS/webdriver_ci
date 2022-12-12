import config from '../../../config';
import { getByResouceId, getByText } from '../../helpers/UiSelectorHelper';
import AppScreen from '../AppScreen';

const SELECTORS = {
    CANDY_SCREEN: getByResouceId("android:id/content"),
    MORE_BUTTON: getByText("More"),
    MY_CANDIES_BUTTON: getByText("My Candies"),
    COLLECT_CANDY_LABEL: getByText("Collect Candy"),
};

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CG_CandyScreen extends AppScreen {
    constructor () {
        super(SELECTORS.CANDY_SCREEN);
    }

    async waitFoMoreButtonIsShown () {
        return this.waitForElementIsShown(SELECTORS.MORE_BUTTON);
    }

    public async moreButton () {
        return $(SELECTORS.MORE_BUTTON);
    }

    public get myCandiesButton () {
        return $(SELECTORS.MY_CANDIES_BUTTON);
    }

    public get collectCandyLabel () {
        return $(SELECTORS.COLLECT_CANDY_LABEL);
    }

    async waitForCollectCandyIsShown () {
        return this.waitForElementIsShown(SELECTORS.COLLECT_CANDY_LABEL);
    }

    public async collectCandyButton () {
        let candiesCount = config.COINGECKO_CANDIES_NUMBER;
        for (let index = 0; index < candiesCount.length; index++) {
            const count = candiesCount[index];
            let candiesCountText = getByText("Collect " + count + " Candies");
            let collectCandyButton = $(candiesCountText);
            if (await (await collectCandyButton).isDisplayed()) {
                return collectCandyButton;
            }
        }
        return null;
    }

    public async handleClickCandyButton () {
        await this.waitFoMoreButtonIsShown();
        await (await this.moreButton()).click();
        await (await this.myCandiesButton).click();
        
        await this.waitForCollectCandyIsShown();
        let collectCandyButton = await this.collectCandyButton();
        if (collectCandyButton) {
            let canCollectText = await collectCandyButton.getText();
            console.log("canCollectText: " + canCollectText);
            await collectCandyButton.click();
            await driver.pause(5000);
        }
    }
}

export default new CG_CandyScreen();
