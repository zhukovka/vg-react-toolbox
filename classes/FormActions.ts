import {ButtonProps} from "../components/buttons";
class FormActions {
    cancel:ButtonProps;
    finish:ButtonProps;

    constructor(cancel:ButtonProps, finish:ButtonProps) {
        this.cancel = cancel;
        this.finish = finish;
    }
}

export default FormActions;