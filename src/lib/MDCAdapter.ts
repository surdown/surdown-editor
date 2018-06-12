// import {MDCRipple} from '@material/ripple';
declare var mdc: any

type MDCType = 'MDCTopAppBar' | 'MDCRipple' | 'MDCTemporaryDrawer' | 'MDCTextField';

export default class MDCAdapter{


    
    static attachTo(el:Element,type: MDCType ){
        let map = {
            'MDCRipple' : mdc.ripple.MDCRipple,
            'MDCTopAppBar' : mdc.topAppBar.MDCTopAppBar,
            'MDCTemporaryDrawer' : mdc.drawer.MDCTemporaryDrawer,
            'MDCTextField' :  mdc.textfield.MDCTextField
        }

        return map[type].attachTo(el)
    }
}