import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {CardActionsSpaced} from 'react-toolbox-addons/lib/cardactionsspaced';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup/ButtonGroup';
import {Button} from 'react-toolbox/lib/button';
import {Row} from 'react-toolbox-addons/lib/grid';
import Admins from '../../classes/Admins.ts';
import FormActionsBack from '../../classes/FormActionsBack.ts';

class OrgAdminsForm extends VGComponentForm {
    static propTypes = {
        info: PropTypes.instanceOf(Admins),
        orgActions: PropTypes.instanceOf(FormActionsBack)
    };

    constructor (props) {
        super(props);
        const {firstname, lastname, email, phone, title, notes} = this.props.info;
        this.state = this.setInitialState([firstname, lastname, email, phone, title, notes]);
    }

    renderFormContent () {
        const {firstname, lastname, email, phone, title, notes} = this.props.info;
        const {back, cancel, finish} = this.props.orgActions;
        return (
            <fieldset>
                <Row expanded>
                    {this.renderInputs([firstname, lastname, email, phone])}
                </Row>
                <Row expanded>
                    {this.renderInput(title, {small: 12, medium: 12, large: 12})}
                    {this.renderInput(notes, {small: 12, medium: 12, large: 12})}
                </Row>
                <CardActionsSpaced>
                    <Button {...back}/>
                    <ButtonGroup>
                        <Button {...cancel}/>
                        <Button {...finish}/>
                    </ButtonGroup>
                </CardActionsSpaced>
            </fieldset>
        );
    }
}

export default OrgAdminsForm;
