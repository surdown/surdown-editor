import { MDCTopAppBar } from '@material/top-app-bar/index';
import MDCAdapter from '../../../lib/MDCAdapter';

var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        const topAppBarElement = this.getEl('top-bar');
        this.comp = MDCAdapter.attachTo(topAppBarElement,'MDCTopAppBar');
    },
    menu:function(...args){
        this.emit('menu',...args);
    },
    onDestroy() {

        this.comp && this.comp.destroy();

    }
}
export = comp;