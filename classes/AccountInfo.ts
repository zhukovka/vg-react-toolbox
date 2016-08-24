import {InputProps} from "../components/input";

class AccountInfo {
    number:InputProps;
    information:InputProps;
    amount:InputProps;
    cardNumber:InputProps;

    constructor(number:InputProps, information:InputProps, amount:InputProps, cardNumber:InputProps) {
        this.number = number;
        this.information = information;
        this.amount = amount;
        this.cardNumber = cardNumber;
    }

}

export default AccountInfo;