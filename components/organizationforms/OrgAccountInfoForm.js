import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';

import {Row} from 'react-toolbox-addons/lib/grid';
import AccountInfo from '../classes/AccountInfo';
import FormActionsBack from '../classes/FormActionsBack';
import ActionsBack from '../actions/ActionsBack';

class OrgAccountInfoForm extends VGComponentForm {
    static propTypes = {
        info: PropTypes.instanceOf(AccountInfo),
        orgActions: PropTypes.instanceOf(FormActionsBack)
    };

    constructor (props) {
        super(props);
        const {number, information, amount, cardNumber} = this.props.info;
        this.state = this.setInitialState([number, information, amount, cardNumber]);
    }

    renderFormContent () {
        const {number, information, amount, cardNumber} = this.props.info;
        return (
            <fieldset>
                <Row expanded>
                    {this.renderInputs([number, information, amount, cardNumber])}
                </Row>
                <ActionsBack actions={this.props.orgActions}/>
            </fieldset>
        );
    }
}

export default OrgAccountInfoForm;
