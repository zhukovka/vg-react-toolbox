import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import DisabledInput from 'react-toolbox-addons/lib/disabledinput';
import {RedHeading} from 'react-toolbox-addons/lib/headings';

/**
 * Summary extends Component
 */
class Summary extends Component {
    static propTypes = {
        /**
         * info <Map<InputProps>>
         */
        info: PropTypes.objectOf(PropTypes.shape({
            children: React.PropTypes.any,
            className: React.PropTypes.string,
            error: React.PropTypes.string,
            floating: React.PropTypes.bool,
            icon: React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.element
            ]),
            key: PropTypes.string.isRequired,
            label: React.PropTypes.string,
            maxLength: React.PropTypes.number,
            multiline: React.PropTypes.bool,
            name: React.PropTypes.string,
            required: React.PropTypes.bool,
            theme: React.PropTypes.shape({
                bar: React.PropTypes.string,
                counter: React.PropTypes.string,
                disabled: React.PropTypes.string,
                error: React.PropTypes.string,
                errored: React.PropTypes.string,
                hidden: React.PropTypes.string,
                hint: React.PropTypes.string,
                icon: React.PropTypes.string,
                input: React.PropTypes.string,
                inputElement: React.PropTypes.string,
                required: React.PropTypes.string,
                withIcon: React.PropTypes.string
            }),
            type: React.PropTypes.string,
            value: React.PropTypes.any
        })),
        /**
         * title <String>
         */
        title: PropTypes.string
    };

    constructor (props) {
        super(props);
    }

    renderField (field, sizes = {small: 12, medium: 6, large: 6}) {
        return (
            <Col key={`col-${field.key}`} {...sizes}>
                <DisabledInput {...field}/>
            </Col>
        );
    }

    renderFields (fields = {}) {
        return Object.keys(fields).map((key)=>this.renderField(fields[key]));
    }


    render () {
        const {title, info} = this.props;
        return (
            <Row expanded>
                <Col small={12} medium={12} large={12}>
                    <RedHeading>{title}</RedHeading>
                </Col>
                {this.renderFields(info)}
            </Row>
        );
    }


}

export default Summary;
