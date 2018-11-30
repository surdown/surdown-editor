import ToneFactory from "../../../lib/ToneFactory";
import * as SD from 'surdownjs';
import SampleCompositions from '../../../lib/SampleCompositions';
import MDCAdapter from '../../../lib/MDCAdapter';

var comp = {
	
	onCreate: function () {
		this.state = {
		};
	},

	textchange: function (event) {
		console.log(event.target.value);
	},
	play: async function () {
		let input = this.getEl('textarea');
		
		const Tone = ToneFactory.Instance();
		localStorage.setItem('composition', input.value);
		input.focus();

		Tone.context.resume().then(() => {
		  new SD.Player(Tone,this.piano,63).play(input.value,input.selectionStart,input.selectionEnd);
	});
	},
	onMount: function () {

		this.comp  = MDCAdapter.attachTo(this.getEl('editor'),'MDCTextField');

		let view = require('../../fullscreen-loader');
		var loader = view.renderSync({});
		let a = loader.appendTo(document.body);
		

		this.keyMap={};
		document.addEventListener('keyup', (event:any) => {
			
			let keyName = event.key
			
			this.keyMap[keyName] = false;
			this.keyMap['Enter'] = false;
		
		});
		document.addEventListener('keydown', (event:any) => {
			
			let keyName = event.key
			
			this.keyMap[keyName] = true;
			this.keyMap['Meta'] && this.keyMap['Enter'] && this.play();
		
		});
		this.getEl('textarea').value = localStorage.getItem('composition') || SampleCompositions.basicSargam;;
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


			var vol = new Tone.Volume(0);
			this.piano.chain(vol, Tone.Master);

		Tone.Transport.bpm.value = 80;

		Tone.Buffer.on('load', () => {

			
			loader.getComponent().destroy();


		})


	},
	onDestroy(){
		this.comp && this.comp.destroy();
	}




}
export = comp;