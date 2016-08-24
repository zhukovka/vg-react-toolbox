import React, {Component} from 'react';
import OrgAdminsForm from '../../components/organizationforms/OrgAdminsForm';
import Admins from '../../classes/Admins.ts';
import FormActionsBack from '../../classes/FormActionsBack.ts';

class OrgAdminsFormTest extends Component {

    constructor (props) {
        super(props);

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
        const firstname = {
            key: 'company_admins_firstname',
            name: 'firstname',
            label: 'Firstname',
            value: '',
            type: 'text',
            onChange: (val)=> {
                console.log(val);
            }
        };
        const lastname = {
            key: 'company_admins_lastname',
            name: 'lastname',
            label: 'Lastname',
            value: '',
            type: 'text',
            onChange: (val)=> {
                console.log(val);
            }
        };
        const email = {
            key: 'company_admins_email',
            name: 'email',
            label: 'Email',
            value: '',
            type: 'email',
            onChange: (val)=> {
                console.log(val);
            }
        };
        const phone = {
            key: 'company_admins_phone',
            name: 'phone',
            label: 'Phone',
            value: '',
            type: 'text',
            onChange: (val)=> {
                console.log(val);
            }
        };
        const title = {
            key: 'company_admins_title',
            name: 'title',
            label: 'Title',
            value: '',
            type: 'text',
            onChange: (val)=> {
                console.log(val);
            }
        };
        const notes = {
            key: 'company_admins_notes',
            name: 'notes',
            label: 'Notes',
            value: '',
            type: 'text',
            onChange: (val)=> {
                console.log(val);
            }
        };
        this.admins = new Admins(firstname, lastname, email, phone, title, notes);
        this.orgActions = new FormActionsBack(back, cancel, finish);
    }


    render () {
        return (
            <section>
                <h5><a
                    href="https://invis.io/ST872JFNH#/180341599_MD_CORR_Create_New_Organization_ST3">OrgAdminsForm</a>
                </h5>

                <OrgAdminsForm
                    onSubmit={(e)=>{
                        e.preventDefault();
                    }}
                    info={this.admins}
                    orgActions={this.orgActions}
                />
            </section>
        );
    }
}

export default OrgAdminsFormTest;
