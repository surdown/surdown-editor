import ToneFactory from "../../../lib/ToneFactory";
import * as SD from 'surdownjs';



var comp = {

	onCreate: function () {
		this.state = {
		};
	},
	
	textchange:function(event){
		console.log(event.target.value);
	},
	play:function(){
		let input  = this.getEl('textarea');
		const Tone = ToneFactory.Instance();
		let str = input.value;
		localStorage.setItem('composition',str);
		// input.focus();
		// input.setSelectionRange(2,5);
		
		new SD.Interpreter(str).parse().then((head)=>{
			new SD.GrpInterpreter().parse(head).then((notes)=>{
			
				let tl = new SD.TimeLine(Tone,"0m")
				tl.assign(notes);
				let track = new SD.Track(Tone,tl,this.piano,63);
				track.play();
				
			})
		})
	},
	onMount: function () {
		this.getEl('textarea').value = localStorage.getItem('composition');
		const Tone = ToneFactory.Instance();

		this.piano = new Tone.Sampler({
			56: '100_Pa_B_harmonium1_1.mp3',
			58: '100_Dha_B_harmonium1_1.mp3',
			60: '100_Ni_B_harmonium1_1.mp3',
			61: '100_Sa_B_harmonium1_1.mp3',
			63: '100_Re_M_harmonium1_1.mp3',
			65: '100_Ga_M_harmonium1_1.mp3',
			66: '100_Ma_M_harmonium1_1.mp3',
			68: '100_Pa_M_harmonium1_1.mp3',
			70: '100_Dha_M_harmonium1_1.mp3',
			72: '100_Ni_M_harmonium1_1.mp3',
			73: '100_Sa_H_harmonium1_1.mp3',

		}, {
				'release': 1,
				'baseUrl': 'media/harmonium/'
			}).toMaster();


		Tone.Transport.bpm.value = 60;

		Tone.Buffer.on('load', () => {

			// let str = '|<सग>प-<पग>|</नग>प-<पग>|</नर>म-<पम>|ग---।रग-<रेस>।रस/ध-।/धर-प।गरस-।<सग>प<गप>-।<धप>गरेरे।--<पप>म।ग<रर>-<मम>।गरस-।'

			

		})

		

	},

	


}
export = comp;