import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {Card} from 'react-toolbox/lib/card';
import {CardActionsRight} from 'react-toolbox-addons/lib/cardactionsright';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import MainInfo from '../../classes/MainInfo.ts';

class OrgFormMain extends VGComponentForm {
    static propTypes = {
        info: PropTypes.instanceOf(MainInfo)
    };

    constructor (props) {
        super(props);
        const {info} = props;
        const {street, city, state, postcode, country} = info.address;
        const inputs = [info.name, info.id, street, city, state, postcode, country];
        this.state = this.setInitialState(inputs);
    }

    render () {
        const {info, buttons} = this.props;
        const {street, city, state, postcode, country} = info.address;
        return (
            <Card>
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
                    {this.renderCardActionsRight(buttons)}
                </CardActionsRight>
            </Card>
        );
    }
}

export default OrgFormMain;