export default class base_playable {

    constructor() {
        console.log("cocos playable sdk from : https://github.com/magician-f/playable-sdk");
        this._init();
    }

    protected _init() {

    }

    protected call_window_func(fun_name: string) {
        if (window[fun_name]) {
            window[fun_name]();
        }
    }

    /**
     * 【必接】点击试玩中的【下载按钮】跳转到【商店】【下载】等。
     * 很重要，直接影响试玩的转化率
     * applovin : 调用此接口跳转到商店
     * mtg      : 需要一个“立即下载”的按钮从始至终贯穿这个游戏，点击此按钮统一调用接口
     * other    : 所有平台都需要调用此接口
     */
    download() {

    }

    /**
     * 游戏初始化调用
     * mtg      : 游戏初始化时需要加载所有资源，加载完成后调用接口
     * other    : 不需要
     */
    game_ready() {

    }

    /**
     * 重新试玩调用(非必须调用)
     * mtg      : 如游戏中存在重新试玩的场景，请在重新试玩时调用接口。如果没有，则无需添加此参数。
     * other    : 不需要
     */
    game_retry() {

    }

    /**
     * 游戏结束调用
     * mtg      : 在游戏结束的时候(在出结束画面时)必须调用接口
     * other    : 不需要
     */
    game_end() {

    }

    /**
     * 添加开始游戏监听
     * mtg      : 试玩会在游戏开始的时候主动执行该方法，方便开发者可以在游戏开始的时候去处理一些逻辑，比如开始倒计时，开始背景音乐等。
     * other    : 为保证试玩一致性，会模拟隔帧调用
     */
    set_game_start_listener(context: any, listener: () => void) {
        //该平台无此要求，隔帧模拟返回
        setTimeout(() => {
            listener.call(context);
        });
    }

    /**
     * 添加游戏关闭监听
     * mtg      : 试玩会在游戏结束的时候主动执行该方法，方便开发者可以在游戏结束的时候去处理一些逻辑，比如关闭背景音乐等。
     * other    : 不需要
     */
    set_game_close_listener(context: any, listener: () => void) {
        //该平台无此要求
    }

    /**
     * 设置在商店中地址
     * unity    : 游戏应用商店页面的 URL 字符串
     * other    : 不需要
     * 
     * 注意替换：your_game_id
     * @param google https://play.google.com/store/apps/details?id=your_game_id
     * @param apple https://itunes.apple.com/us/your_game_id?mt=8
     */
    set_store_game_address(google: string, apple: string) {
        //该平台无此要求
    }
}