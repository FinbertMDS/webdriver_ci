import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get collectCandyButton () {
        return $('input.collect-candy-button');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('account/candy?locale=en');
    }
}

export default new SecurePage();
