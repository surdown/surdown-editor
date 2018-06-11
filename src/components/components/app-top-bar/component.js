"use strict";
const MDCAdapter_1 = require("../../../lib/MDCAdapter");
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        const topAppBarElement = this.getEl('top-bar');
        this.comp = MDCAdapter_1.default.attachTo(topAppBarElement, 'MDCTopAppBar');
    },
    menu: function (...args) {
        this.emit('menu', ...args);
    },
    onDestroy() {
        this.comp && this.comp.destroy();
    }
};
module.exports = comp;
