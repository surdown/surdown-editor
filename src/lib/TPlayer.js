"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToneFactory_1 = require("./ToneFactory");
class TPlayer {
    static instance(url, callback) {
        let Tone = ToneFactory_1.default.Instance();
        let player = new Tone.Player(url, callback);
        return player;
    }
}
exports.default = TPlayer;
