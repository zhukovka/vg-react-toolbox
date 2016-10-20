import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {Row} from 'react-toolbox-addons/lib/grid';
import ActionsBack from '../actions/ActionsBack';

class OrgAdminsForm extends VGComponentForm {
    static propTypes = {
        info: PropTypes.object,
        orgActions: PropTypes.object
    };

    constructor (props) {
        super(props);
        const {firstname, lastname, email, phone, title, notes} = this.props.info;
        this.state = this.setInitialState([firstname, lastname, email, phone, title, notes]);
    }

    renderFormContent () {
        const {firstname, lastname, email, phone, title, notes} = this.props.info;
        return (
            <fieldset>
                <Row expanded>
                    {this.renderInputs([firstname, lastname, email, phone])}
                </Row>
                <Row expanded>
                    {this.renderInput(title, {small: 12, medium: 12, large: 12})}
                    {this.renderInput(notes, {small: 12, medium: 12, large: 12})}
                </Row>
                <ActionsBack actions={this.props.orgActions}/>
            </fieldset>
        );
    }
}

export default OrgAdminsForm;
