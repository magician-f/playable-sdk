import base_playable from "./base_playable";
/**
 * https://developers.is.com/ironsource-mobile/general/interactive-requirements
 */
export default class ironsource extends base_playable {

    protected _init(): void {
        window["dapi"].addEventListener("viewableChange", this.on_visible_change); //this event is used to know when the ad was visible/hidden
        window["dapi"].addEventListener("adResized", this.on_resized); //this event is used recalculate ad UI items(mostly upon rotation)
        window["dapi"].addEventListener("audioVolumeChange", this.on_volume_change); //this event is used to get info about any volume state change
    }

    download() {
        window["dapi"].openStoreUrl();
    }

    protected on_visible_change(event) {
        console.log("isViewable " + event.isViewable);
        if (event.isViewable) {
            //START or RESUME the ad (add your own code here)
            cc.game.resume();
        } else {
            //PAUSE the ad and MUTE sounds or DO nothing if creative hasnât been launched yet (add your own code here)
            cc.game.pause();
        }
    }

    protected on_resized(size) {
        //dapi.getScreenSize();
        console.log("ad was resized width " + size.width + " height " + size.height);
    }

    protected on_volume_change(volume: number) {
        let isAudioEnabled = !!volume;
        if (isAudioEnabled) {
            //START or turn on the sound(add your own code here)
            cc.audioEngine.resumeAll();
        } else {
            //PAUSE the turn off the sound(add your own code here)
            cc.audioEngine.pauseAll();
        }
    }

}

