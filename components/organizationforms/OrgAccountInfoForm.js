import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {CardActionsSpaced} from 'react-toolbox-addons/lib/cardactionsspaced';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup/ButtonGroup';
import {Button} from 'react-toolbox/lib/button';
import {Row} from 'react-toolbox-addons/lib/grid';
import AccountInfo from '../classes/AccountInfo';
import FormActionsBack from '../classes/FormActionsBack';

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
        const {back, cancel, finish} = this.props.orgActions;
        return (
            <fieldset>
                <Row expanded>
                    {this.renderInputs([number, information, amount, cardNumber])}
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

export default OrgAccountInfoForm;
