import base_playable from "./base_playable";
/**
 * https://p.applov.in/playablePreview?create=1&qr=1
 */
export default class applovin extends base_playable {

    download() {
        window["mraid"] && window["mraid"].open();
    }

}