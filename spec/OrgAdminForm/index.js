import React, {Component} from 'react';
import VGComponentForm from '../../components/vgcomponentform/index';

class OrgAdminForm extends Component {

    constructor (props) {
        super(props);
        const inp1 = {
            label: 'Account Number',
            name: 'accnum',
            key: 'accnum',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: 'accNum'
        };
        const inp2 = {
            label: 'Amount $',
            name: 'amount',
            key: 'amount',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: 'Amount'
        };
        const inp3 = {
            label: 'Order Information',
            name: 'orginfo',
            key: 'orginfo',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: 'orginfo'
        };
        const inp4 = {
            label: 'CardNumber (last 4 numbers)',
            name: 'cardnum',
            key: 'cardnum',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: 'cardnum'
        };

        this.inputs = [inp1, inp2, inp3, inp4];
    }


    render () {
        return (
            <VGComponentForm
                inputs={this.inputs}
            />
        );
    }
}

export default OrgAdminForm;
