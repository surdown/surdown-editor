import * as Peer from 'simple-peer'
import { SimplePeer, Instance } from 'simple-peer';

export default class PeerConnection {

    private p: Instance;
    private initiator: boolean
    private connected = false;
    private signalStr:any;
    constructor(initiator: boolean,data?:string) {
        this.p = new Peer({ initiator: initiator,trickle: false });
        this.initiator = initiator;
        initiator ? this.p.on('signal', (data) => {
             data =  JSON.stringify(data)
             this.signalStr = data;
            console.log(data);
          }) : this.p.signal(JSON.parse(data))

          this.p.on('connect', () =>{
            this.connected = true;
                setInterval(()=>{
                    this.p.send('whatever' + Math.random())
                },1000)
          })

          this.p.on('error',(err)=>{
              console.error(err);
          })

          this.p.on('data', function (data) {
            console.log('data: ' + data)
          })
    }

    signalData(){
        return this.signalStr;
    }
    send(data: any) {
        this.connected && this.p.send(data);
    }

}