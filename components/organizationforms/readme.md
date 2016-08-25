# OrgMainInfoForm 

### Props
info: PropTypes.instanceOf(MainInfo),

orgActions: PropTypes.instanceOf(FormActions),

onUpload: Callback\<File file, String result, DOMEvent event\>

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