import base_playable from "./base_playable";
/**
 * https://docs.unity.com/acquire/manual/playable-ads
 */
export default class unity extends base_playable {

    android_url = "";
    ios_url = "";

    protected _init(): void {
        // The viewableChange event fires if the ad container's viewability status changes.
        // Add a listener for the viewabilityChange event, to handle pausing and resuming: 
        // 广告容器的可见性状态发生变化时将触发 viewableChange 事件。
        // 添加一个 viewabilityChange 事件监听器，以便处理暂停和恢复： 
        window["mraid"].addEventListener('viewableChange', this.on_visible_change);
    }

    download() {
        let url = "";
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            url = this.android_url;
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            url = this.ios_url;
        } else {
            console.log("未知平台", cc.sys.os);
        }
        ;
        window["mraid"] && window["mraid"].open(url);
    }

    /**
     * Implement a function that handles pausing and resuming the ad based on visibility:
     * 实施一个根据可见性处理暂停和恢复广告的函数：
     * @param viewable 
     */
    protected on_visible_change(viewable: boolean) {
        console.log("on_visible_change " + viewable);
        if (viewable) {
            // If the ad is viewable, show the ad:
            // 如果广告可见，则展示广告：
            cc.game.resume();
        } else {
            // If not, pause the ad.
            // 否则暂停广告。
            cc.game.pause();
        }
    }

    set_store_game_address(google: string, apple: string) {
        this.android_url = google;
        this.ios_url = apple;
    }

}