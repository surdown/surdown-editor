import ToneFactory from './ToneFactory';
export default class Tanpura{
    players:any
    sequence:any
    
    constructor(onload?:() => void){
        let Tone = ToneFactory.Instance();
        this.players = new Tone.Players({
            "pa":"audio/tanpura/tanpa.mp3",
            "pa2":"audio/tanpura/tanpa.mp3",
            "hsa":"audio/tanpura/tanhsa.mp3",
            "sa":"audio/tanpura/tansa.mp3"
        },{ volume:-20,
            onload:()=>{
            // this.players.fadIn = 0.2;
            // this.players.fadOut = 0.2;
            
            this.players.toMaster();
            
            onload && onload();
        }}) 

        this.sequence  = new Tone.Sequence((time, note)=>{
            this.playNote(note);
		}, [ "sa", "hsa","pa", "pa2"], "2n");
    }

    private playNote(note:any){
         this.players.get(note).start();
    }
    play(){
        this.sequence.start();
    }
    stop(){
        this.sequence.stop();
    }
}