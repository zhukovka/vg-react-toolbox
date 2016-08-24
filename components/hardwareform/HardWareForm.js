import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {CardActionsRight} from 'react-toolbox-addons/lib/cardactionsright';
import {Button} from 'react-toolbox/lib/button';
import {Row} from 'react-toolbox-addons/lib/grid';
import HardWare from '../classes/HardWare';
import FormActions from '../classes/FormActions';

class HardWareForm extends VGComponentForm {
    static propTypes = {
        info: PropTypes.instanceOf(HardWare),
        hardwareActions: PropTypes.instanceOf(FormActions)
    };

    constructor (props) {
        super(props);
        const {type, manufacturer, model, uid} = this.props.info;
        this.state = this.setInitialState([type, manufacturer, model, uid]);
    }

    renderFormContent () {
        const {type, manufacturer, model, uid} = this.props.info;
        const {cancel, finish} = this.props.hardwareActions;
        return (
            <fieldset>
                <Row expanded>
                    {this.renderDropDowns([type, manufacturer, model])}
                    {this.renderInput(uid)}
                </Row>
                <CardActionsRight>
                        <Button {...cancel}/>
                        <Button {...finish}/>
                </CardActionsRight>
            </fieldset>
        );
    }
}

export default HardWareForm;
