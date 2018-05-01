import ToneFactory from './ToneFactory';
export default class TPlayer{

    static instance(url:string,callback?:Function){
        let Tone = ToneFactory.Instance();
        let player =  new Tone.Player(url,callback)
        return player;
    }
}