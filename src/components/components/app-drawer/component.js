"use strict";
const MDCAdapter_1 = require("../../../lib/MDCAdapter");
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        const topAppBarElement = this.getEl('temporary-drawer');
        this.comp = MDCAdapter_1.default.attachTo(topAppBarElement, 'MDCTemporaryDrawer');
    },
    open: function () {
        this.comp.open = true;
    },
    onDestroy() {
        this.comp && this.comp.destroy();
    }
};
module.exports = comp;
