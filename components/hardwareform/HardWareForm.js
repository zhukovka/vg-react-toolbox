import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {CardActionsRight} from 'react-toolbox-addons/lib/cardactionsright';
import {Button} from 'react-toolbox/lib/button';
import {Row} from 'react-toolbox-addons/lib/grid';
import HardwareFields from '../classes/HardwareFields';
import FormActions from '../classes/FormActions';
import {Upload} from 'react-toolbox-addons/lib/upload-zone';

class HardWareForm extends VGComponentForm {
    /**
     * @type {{hardwareActions: Requireable<any>, info: Requireable<any>, onUpload: Requireable<any>}}
     */
    static propTypes = {
        hardwareActions: PropTypes.instanceOf(FormActions),
        info: PropTypes.instanceOf(HardwareFields),
        onUpload: PropTypes.func
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
                <Upload onUpload={this.props.onUpload}/>
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
