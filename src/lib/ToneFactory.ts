export default class ToneFactory{

    static Instance():any{
        const Tone = require("Tone");
        return Tone;
    }

}