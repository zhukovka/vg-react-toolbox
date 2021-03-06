import React, {PropTypes} from 'react';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import {RedHeading} from 'react-toolbox-addons/lib/headings';
import Summary from './Summary';

/**
 * MainInfoSummary extends Summary
 */
class MainInfoSummary extends Summary {
    static propTypes = {
        /**
         * <array> info
         */
        info: PropTypes.array,
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
                    {this.renderField(state, {small: 8, medium: 3, large: 3})}
                    {this.renderField(postcode, {small: 4, medium: 3, large: 3})}
                    {this.renderField(country, {small: 12, medium: 6, large: 6})}
                </Row>
            </div>
        );
    }


}

export default MainInfoSummary;
