import {DropdownPlusProps} from "../components/dropdowns";
import {InputProps} from "../components/input";
class HardWare {
    type:DropdownPlusProps;
    manufacturer:DropdownPlusProps;
    model:DropdownPlusProps;
    uid:InputProps;

    constructor(type:DropdownPlusProps, manufacturer:DropdownPlusProps, model:DropdownPlusProps, uid:InputProps) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.uid = uid;
    }
}

export default HardWare;