import React, {Component} from 'react';
import OrgAccountInfoForm from '../../components/organizationforms/OrgAccountInfoForm';
import AccountInfo from '../../components/classes/AccountInfo.ts';
import FormActionsBack from '../../components/classes/FormActionsBack.ts';

class OrgAccountInfoFormTest extends Component {

    constructor (props) {
        super(props);
        const number = {
            label: 'Number',
            key: 'company_account_number',
            name: 'number',
            onChange: (val)=> {
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const information = {
            label: 'Information',
            key: 'company_account_information',
            name: 'information',
            onChange: (val)=> {
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const amount = {
            label: 'Amount',
            key: 'company_account_amount',
            name: 'amount',
            onChange: (val)=> {
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const cardNumber = {
            label: 'CardNumber',
            key: 'company_account_cardNumber',
            name: 'cardNumber',
            onChange: (val)=> {
                console.log(val);
            },
            type: 'text',
            value: ''
        };
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
        this.accountinfo = new AccountInfo(number, information, amount, cardNumber);
        this.orgActions = new FormActionsBack(back, cancel, finish);
    }


    render () {
        return (
            <section>
                <h5><a href="https://invis.io/ST872JFNH#/180341590_MD_CORR_Create_New_Organization_ST2">OrgAccountInfoForm</a>
                </h5>

                <OrgAccountInfoForm
                    onSubmit={(e)=>{
                        e.preventDefault();
                    }}
                    info={this.accountinfo}
                    orgActions = {this.orgActions}
                />
            </section>
        );
    }
}

export default OrgAccountInfoFormTest;
