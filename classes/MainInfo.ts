import {InputProps} from "../components/input";
interface Address {
    street: InputProps;
    city: InputProps;
    state: InputProps;
    postcode: InputProps;
    country: InputProps;
}
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