import config from '../../../config';
import { getByResouceId, getByText } from '../../helpers/UiSelectorHelper';
import AppScreen from '../AppScreen';

const SELECTORS = {
    FIRSTSTSRT_SCREEN: getByResouceId("android:id/content"),
    LOGIN_BUTTON: getByText("Login"),
};

class CG_FirstStartScreen extends AppScreen {
    constructor () {
        super(SELECTORS.FIRSTSTSRT_SCREEN);
    }

    async waitForLoginButtonlIsShown () {
        return $(SELECTORS.LOGIN_BUTTON).waitForDisplayed({
            timeout: config.DEFAULT_TIMEOUT,
            reverse: false,
        });
    }

    get loginButton () {
        return $(SELECTORS.LOGIN_BUTTON);
    }
}

export default new CG_FirstStartScreen();
