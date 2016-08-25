# HardWareForm

### Props
hardwareActions: PropTypes.instanceOf(FormActions)

info: PropTypes.instanceOf(HardwareFields)

onUpload: PropTypes.func

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

### HardwareFields

InputProps react-toolbox  definition

DropdownPlusProps - react-addons-toolbox  definition

```
class HardwareFields {
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
```

### Import
```
import HardWareForm from 'vg-react-toolbox/lib/hardwareform/HardWareForm';
```