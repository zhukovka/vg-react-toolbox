import React, {Component} from 'react';
import OrgMainInfoForm from '../../components/organizationforms/OrgMainInfoForm';
import MainInfo from '../../components/classes/MainInfo.ts';
import FormActions from '../../components/classes/FormActions.ts';

class OrgMainInfoFormTest extends Component {

    constructor (props) {
        super(props);
        const name = {
            label: 'Company name',
            key: 'company_name',
            name: 'name',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const id = {
            label: 'ID number',
            key: 'company_id',
            name: 'id',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const street = {
            label: 'Street',
            key: 'company_address_street',
            name: 'street',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const city = {
            label: 'city',
            key: 'company_address_city',
            name: 'city',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const state = {
            label: 'state',
            key: 'company_address_state',
            name: 'state',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const postcode = {
            label: 'postcode',
            key: 'company_address_postcode',
            name: 'postcode',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const country = {
            label: 'country',
            key: 'company_address_country',
            name: 'country',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: ''
        };
        const btn1 = {
            key: 'cancel-btn',
            label: 'Cancel',
            type: 'button',
            onClick: ()=> {
                console.log('cancelled');
            }
        };
        const btn2 = {
            key: 'finish-btn',
            label: 'Finish',
            type: 'submit',
            primary: true,
            onClick: ()=> {
                console.log('submit');
            }
        };
        this.orgActions = new FormActions(btn1, btn2);
        this.maininfo = new MainInfo(name, id, {street, city, state, postcode, country});
    }


    render () {
        return (
            <section>
                <h5><a
                    href="https://invis.io/ST872JFNH#/180341597_MD_CORR_Create_New_Organization_ST1">OrgMainInfoForm</a>
                </h5>

                <OrgMainInfoForm
                    onSubmit={(e)=>{
                        e.preventDefault();
                    }}
                    orgActions={this.orgActions}
                    info={this.maininfo}
                />
            </section>
        );
    }
}

export default OrgMainInfoFormTest;
