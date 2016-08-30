## ActionsBack `<ActionsBack/>`

```
ActionsBack react component
@returns {JSX} 
```

### Properties
```
actions <FormActionsBack>   
                 
```

### Example
```
    const back = {
            key: 'back-btn',
            label: 'Back',
            type: 'button',
            onClick: ()=> {
                console.log('back');
            }
        };
        const cancel = {
            key: 'cancel-btn',
            label: 'Cancel',
            type: 'button',
            onClick: ()=> {
                console.log('cancelled');
            }
        };
        const finish = {
            key: 'finish-btn',
            label: 'Finish',
            primary: true,
            type: 'submit',
            onClick: ()=> {
                console.log('finished');
            }
        };
        this.orgActions = new FormActionsBack(back, cancel, finish);
    <ActionsBack actions={this.orgActions}/>
```

------------------------------------------------------------------

