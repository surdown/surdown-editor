"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Peer = require("simple-peer");
class PeerConnection {
    constructor(initiator, data) {
        this.connected = false;
        this.p = new Peer({ initiator: initiator, trickle: false });
        this.initiator = initiator;
        initiator ? this.p.on('signal', (data) => {
            data = JSON.stringify(data);
            this.signalStr = data;
            console.log(data);
        }) : this.p.signal(JSON.parse(data));
        this.p.on('connect', () => {
            this.connected = true;
            setInterval(() => {
                this.p.send('whatever' + Math.random());
            }, 1000);
        });
        this.p.on('error', (err) => {
            console.error(err);
        });
        this.p.on('data', function (data) {
            console.log('data: ' + data);
        });
    }
    signalData() {
        return this.signalStr;
    }
    send(data) {
        this.connected && this.p.send(data);
    }
}
exports.default = PeerConnection;
