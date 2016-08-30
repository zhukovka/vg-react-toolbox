import React, {Component} from 'react';
import Admins from '../../components/classes/Admins.ts';
import FormActionsBack from '../../components/classes/FormActionsBack.ts';
import Summary from '../../components/summary/Summary';
import MainInfoSummary from '../../components/summary/MainInfoSummary';
import OrgFormSteps from '../../components/organizationforms/OrgFormSteps';
import {Card} from 'react-toolbox/lib/card';
import MainInfo from '../../components/classes/MainInfo.ts';
import ActionsBack from '../../components/actions/ActionsBack';
import Logo from '../../components/logo/Logo';

class SummaryTest extends Component {

    constructor (props) {
        super(props);
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
        this.maininfo = new MainInfo(name, id, {street, city, state, postcode, country});
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
            value: 'gaga@gaga.com'
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
        this.orgActions = new FormActionsBack(back, cancel, finish);
        this.steps = [{
            name: 'Main Information',
            done: true
        }, {
            name: 'Account Information',
            done: true
        }, {name: 'Organization Admins', done: true}, {name: 'Hardware', done: true}, {name: 'Summary', active: true}];
    }


    render () {
        return (
            <section>
                <h5><a
                    href="https://drive.google.com/file/d/0B4Q-anPzFjjeQ2JiMWs3Qlh1SEU/view?usp=sharing">Summary</a>
                </h5>
                <OrgFormSteps steps={this.steps}/>
                <Card>
                    <Logo image="https://placeimg.com/120/120/animals"/>
                    <MainInfoSummary info={this.maininfo} title="Main Information"/>
                    <Summary info={this.admins} title="Organization admin #1"/>
                    <Summary info={this.admins} title="Organization admin #2"/>
                    <ActionsBack actions={this.orgActions}/>
                </Card>
            </section>
        );
    }
}

export default SummaryTest;
