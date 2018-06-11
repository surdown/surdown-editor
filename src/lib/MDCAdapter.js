"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MDCAdapter {
    static attachTo(el, type) {
        let map = {
            'MDCRipple': mdc.ripple.MDCRipple,
            'MDCTopAppBar': mdc.topAppBar.MDCTopAppBar,
            'MDCTemporaryDrawer': mdc.drawer.MDCTemporaryDrawer
        };
        return map[type].attachTo(el);
    }
}
exports.default = MDCAdapter;
