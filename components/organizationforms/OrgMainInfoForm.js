import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {CardActionsRight} from 'react-toolbox-addons/lib/cardactionsright';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import {Upload} from 'react-toolbox-addons/lib/upload-zone';

class OrgMainInfoForm extends VGComponentForm {
    static propTypes = {
        info: PropTypes.object,
        onUpload: PropTypes.func,
        orgActions: PropTypes.object,
        uploadType: PropTypes.string.isRequired,
        requirements: PropTypes.shape({
            min: PropTypes.objectOf({
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired
            }),
            max: PropTypes.objectOf({
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired
            })
        })
    };

    constructor (props) {
        super(props);
        const {info} = this.props;
        const {street, city, state, postcode, country} = info.address;
        const inputs = [info.name, info.id, street, city, state, postcode, country];
        this.state = this.setInitialState(inputs);
    }

    renderFormContent () {
        const {info, orgActions, uploadType, requirements} = this.props;
        const {street, city, state, postcode, country} = info.address;
        return (
            <fieldset>
                <Upload onUpload={this.props.onUpload} uploadType={uploadType} requirements={requirements}/>
                <Row expanded>
                    {this.renderInputs([info.name, info.id])}
                </Row>
                <Row expanded>
                    <Col small={12} medium={12} large={12}>
                        Address
                    </Col>
                </Row>
                <Row expanded>
                    {this.renderInputs([street, city])}
                </Row>
                <Row expanded>
                    {this.renderInput(state, {small: 6, medium: 4, large: 4})}
                    {this.renderInput(postcode, {small: 6, medium: 2, large: 2})}
                    {this.renderInput(country)}
                </Row>
                <CardActionsRight>
                    {this.renderCardActionsRight([orgActions.cancel, orgActions.finish])}
                </CardActionsRight>
            </fieldset>
        );
    }
}

export default OrgMainInfoForm;
