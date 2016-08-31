import {DropdownPlusProps} from "../dropdowns";
import {InputProps} from "../input";
class HardwareFields {
    type:DropdownPlusProps;
    manufacturer:DropdownPlusProps;
    model:DropdownPlusProps;
    uid:InputProps;
    port:InputProps;

    constructor(type:DropdownPlusProps, manufacturer:DropdownPlusProps, model:DropdownPlusProps, uid:InputProps, port:InputProps) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.uid = uid;
        this.port = port;
    }
}

export default HardwareFields;