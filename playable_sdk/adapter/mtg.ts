import base_playable from "./base_playable";
/**
 * https://www.mindworks-creative.com/review/doc
 */
export default class mtg extends base_playable {

    download() {
        this.call_window_func("install");
    }

    game_ready() {
        this.call_window_func("gameReady");
    }

    game_retry() {
        this.call_window_func("gameRetry");
    }

    game_end() {
        this.call_window_func("gameEnd");
    }

    set_game_start_listener(context: any, listener: () => void) {
        window["gameStart"] = function () {
            listener.call(context);
        };
    }

    set_game_close_listener(context: any, listener: () => void) {
        window["gameClose"] = function () {
            listener.call(context);
        };
    }

}