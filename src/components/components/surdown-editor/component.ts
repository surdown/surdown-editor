import ToneFactory from "../../../lib/ToneFactory";
import * as SD from 'surdownjs';



var comp = {
	
	onCreate: function () {
		this.state = {
		};
	},

	textchange: function (event) {
		console.log(event.target.value);
	},
	play: function () {
		let input = this.getEl('textarea');
		const Tone = ToneFactory.Instance();
		let selectionStart = input.selectionStart;
		let selectionEnd = input.selectionEnd;
		let isSelected = (selectionStart !== selectionEnd);
		let str: string = isSelected && input.value.length ? input.value.substring(selectionStart, selectionEnd) : input.value;

		localStorage.setItem('composition', input.value);

		console.log('playing', str);
		let startsWithBar = str.charAt(0) === '|' || str.charAt(0) === '।';
		let endsWithBar = str.charAt(str.length - 1) === '|' || str.charAt(str.length - 1) === '।';
		str = startsWithBar ? str : ('|' + str);
		str = endsWithBar ? str : (str + '|');
		input.focus();

		Tone.context.resume().then(() => {
		  new SD.Player(Tone,this.piano,63).play(str);
	});
	},
	onMount: function () {

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


		Tone.Transport.bpm.value = 80;

		Tone.Buffer.on('load', () => {

			
			loader.getComponent().destroy();


		})


	},




}
export = comp;