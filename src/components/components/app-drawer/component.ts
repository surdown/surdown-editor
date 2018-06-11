import { MDCTopAppBar } from '@material/top-app-bar/index';
import MDCAdapter from '../../../lib/MDCAdapter';

var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        const topAppBarElement = this.getEl('temporary-drawer');
        this.comp = MDCAdapter.attachTo(topAppBarElement,'MDCTemporaryDrawer');
    },
    open:function(){
        this.comp.open = true;
    },
    onDestroy() {

        this.comp && this.comp.destroy();

    }
}
export = comp;