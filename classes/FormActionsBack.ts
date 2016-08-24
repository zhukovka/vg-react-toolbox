import {ButtonProps} from "../components/buttons";
import FormActions from "./FormActions";
class FormActionsBack extends FormActions {
    back:ButtonProps;

    constructor(back:ButtonProps, cancel:ButtonProps, finish:ButtonProps) {
        super(cancel, finish);
        this.back = back;
    }
}

export default FormActionsBack;