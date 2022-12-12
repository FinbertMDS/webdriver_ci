import config from '../../../config';
import { getByClassnameAndText, getByResouceId, getByText } from '../../helpers/UiSelectorHelper';
import AppScreen from '../AppScreen';

const SELECTORS = {
    LOGIN_SCREEN: getByResouceId("android:id/content"),
    EMAIL: getByClassnameAndText("android.widget.EditText", "email@example.com"),
    PASSWORD: getByClassnameAndText("android.widget.EditText", "Password"),
    LOGIN_BUTTON: getByText("Login"),
    LETS_BEGIN_BUTTON: getByText("Let's Begin"),
};

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CG_LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $(SELECTORS.EMAIL);
    }

    public get inputPassword () {
        return $(SELECTORS.PASSWORD);
    }

    public get loginButton () {
        return $(SELECTORS.LOGIN_BUTTON);
    }

    public get letsBeginButton () {
        return $(SELECTORS.LETS_BEGIN_BUTTON);
    }

    public async waitForLetsBeginButtonIsDisappear () {
        return $(SELECTORS.LETS_BEGIN_BUTTON).waitForDisplayed({
            timeout: config.DEFAULT_TIMEOUT,
            reverse: true,
        });
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    public async handleAfterLogin() {
        await driver.pause(5000);
        await (await this.letsBeginButton).waitForDisplayed();
        await (await this.letsBeginButton).click();
        await driver.pause(5000);
    }
}

export default new CG_LoginScreen();
