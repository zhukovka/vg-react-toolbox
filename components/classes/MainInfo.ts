import {InputProps} from "../input";
/**
 * street: InputProps;
 * city: InputProps;
 * state: InputProps;
 * postcode: InputProps;
 * country: InputProps;
 */
interface Address {
    street: InputProps;
    city: InputProps;
    state: InputProps;
    postcode: InputProps;
    country: InputProps;
}
/**
 * name: InputProps;
 * id: InputProps;
 * address: Address;
 */
class MainInfo {
    name: InputProps;
    id: InputProps;
    address: Address;

    constructor(name: InputProps, id: InputProps, address: Address) {
        this.name = name;
        this.id = id;
        this.address = address;
    }

}

export default MainInfo;