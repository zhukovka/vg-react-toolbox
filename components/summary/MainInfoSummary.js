import React, {PropTypes} from 'react';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import {RedHeading} from 'react-toolbox-addons/lib/headings';
import Summary from './Summary';
import MainInfo from '../classes/MainInfo';

/**
 * MainInfoSummary extends Summary
 */
class MainInfoSummary extends Summary {
    static propTypes = {
        /**
         * <MainInfo> info
         */
        info: PropTypes.instanceOf(MainInfo),
        /**
         * <String> title
         */
        title: PropTypes.string
    };

    constructor (props) {
        super(props);
    }


    render () {
        const {title, info} = this.props;
        const {name, id, address} = info;
        const {street, city, state, postcode, country} = address;
        return (
            <div>
                <Row expanded>
                    <Col small={12} medium={12} large={12}>
                        <RedHeading>{title}</RedHeading>
                    </Col>
                    {this.renderFields({name, id})}
                </Row>
                <Row expanded>
                    <Col small={12} medium={12} large={12}>
                        <RedHeading>Address</RedHeading>
                    </Col>
                </Row>
                <Row expanded>
                    {this.renderFields({street, city})}
                </Row>
                <Row expanded>
                    {this.renderField(state, {small: 6, medium: 4, large: 4})}
                    {this.renderField(postcode, {small: 6, medium: 2, large: 2})}
                    {this.renderField(country)}
                </Row>
            </div>
        );
    }


}

export default MainInfoSummary;
