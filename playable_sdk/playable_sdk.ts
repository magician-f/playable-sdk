/**
 * super-html 试玩适配sdk
 * github      ---- https://github.com/magician-f/playable-sdk
 * 试玩打包工具 ---- https://store.cocos.com/app/detail/3657
 */
import applovin from "./adapter/applovin";
import ironsource from "./adapter/ironsource";
import mtg from "./adapter/mtg";
import base_playable from "./adapter/base_playable";

let sdk: base_playable;
if (window["mraid"]) {
    sdk = new applovin();
} else if (window["install"]) {
    sdk = new mtg();
} else if (window["dapi"]) {
    sdk = new ironsource();
} else {
    sdk = new base_playable();
}
export default sdk;

