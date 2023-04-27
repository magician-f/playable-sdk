import base_playable from "./base_playable";
/**
 * https://ads.tiktok.com/help/article/playable-ads
 */
export default class pangle extends base_playable {

    download() {
        window["playableSDK"] && window["playableSDK"].openAppStore();
    }

}