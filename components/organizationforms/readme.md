# Organization forms extends VGComponentForm

# OrgMainInfoForm 

### Props
info: PropTypes.instanceOf(MainInfo),

orgActions: PropTypes.instanceOf(FormActions),

onUpload: Callback3\<File file, String result, DOMEvent event\>

### FormActions
    
ButtonProps - react-toolbox  definition

```
class FormActions {
    cancel:ButtonProps;
    finish:ButtonProps;

    constructor(cancel:ButtonProps, finish:ButtonProps) {
        this.cancel = cancel;
        this.finish = finish;
    }
}
```

### MainInfo

InputProps react-toolbox  definition


```
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

```

### Import
```
import OrgMainInfoForm from 'vg-react-toolbox/lib/organizationforms/OrgMainInfoForm';
```

# OrgFormSteps

### Props

steps: PropTypes.arrayOf(Step)

### Step

```
interface Step{
    name: string;
    active?: boolean;
    done?: boolean;
}
```

# OrgAccountInfoForm

### Props
info: PropTypes.instanceOf(AccountInfo)

orgActions: PropTypes.instanceOf(FormActionsBack)

### AccountInfo

```
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
```

### FormActionsBack

```
class FormActionsBack extends FormActions {
    back:ButtonProps;

    constructor(back:ButtonProps, cancel:ButtonProps, finish:ButtonProps) {
        super(cancel, finish);
        this.back = back;
    }
}
```

# OrgAdminsForm

### Props

info: PropTypes.instanceOf(Admins)

orgActions: PropTypes.instanceOf(FormActionsBack)

### Admins

```
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
```
