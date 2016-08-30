## MainInfoSummary `<MainInfoSummary/>`

```
MainInfoSummary extends Summary 
```

### Properties
```
info <MainInfo>   
                 

title <String>   
                 
```

### Example 

```
        const name = {
            label: 'Company name',
            key: 'company_name',
            name: 'name',
            value: '4242'
        };
        const id = {
            label: 'ID number',
            key: 'company_id',
            name: 'id',
            value: '4242'
        };
        const street = {
            label: 'Street',
            key: 'company_address_street',
            name: 'street',
            value: 'green'
        };
        const city = {
            label: 'city',
            key: 'company_address_city',
            name: 'city',
            value: 'blablabla'
        };
        const state = {
            label: 'state',
            key: 'company_address_state',
            name: 'state',
            value: 'Wonderland'
        };
        const postcode = {
            label: 'postcode',
            key: 'company_address_postcode',
            name: 'postcode',
            value: '424242'
        };
        const country = {
            label: 'country',
            key: 'company_address_country',
            name: 'country',
            value: 'Nowhere'
        };
        maininfo = new MainInfo(name, id, {street, city, state, postcode, country});
        
        
        <MainInfoSummary info={maininfo} title="Main Information"/>
```


------------------------------------------------------------------

## Summary `<Summary/>`

```
Summary extends Component 
```

### Properties
```
info <Map<InputProps>>   
                 

title <String>   
                 
```


------------------------------------------------------------------

### Example

```

        const firstname = {
            key: 'company_admins_firstname',
            name: 'firstname',
            label: 'Firstname',
            value: 'Ololsha'
        };
        const lastname = {
            key: 'company_admins_lastname',
            name: 'lastname',
            label: 'Lastname',
            value: 'Gagaga'
        };
        const email = {
            key: 'company_admins_email',
            name: 'email',
            label: 'Email',
            value: 'gaga@gaga.com',
        };
        const phone = {
            key: 'company_admins_phone',
            name: 'phone',
            label: 'Phone',
            value: '123123321'
        };
        const title = {
            key: 'company_admins_title',
            name: 'title',
            label: 'Title',
            value: 'Manager'
        };
        const notes = {
            key: 'company_admins_notes',
            name: 'notes',
            label: 'Notes',
            value: 'none'
        };
        this.admins = new Admins(firstname, lastname, email, phone, title, notes);
        <Summary info={this.admins} title="Organization admin #1"/>
```