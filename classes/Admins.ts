import {InputProps} from "../components/input";

class Admins {
    firstname:InputProps;
    lastname:InputProps;
    email:InputProps;
    phone:InputProps;
    title:InputProps;
    notes:InputProps;

    constructor(firstname:InputProps, lastname:InputProps, email:InputProps, phone:InputProps, title:InputProps, notes:InputProps) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.title = title;
        this.notes = notes;
    }
}

export default Admins;