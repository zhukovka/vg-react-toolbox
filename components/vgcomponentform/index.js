/**
 * Created by mitya on 8/23/16.
 */
import React, {Component, PropTypes} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {CardActionsRight} from 'react-toolbox-addons/lib/cardactionsright';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import Input from 'react-toolbox/lib/input';

class VGComponentForm extends Component {
    static propTypes = {
        dropdowns: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            onChange: PropTypes.func,
            source: PropTypes.array
        })),
        inputs: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            onChange: PropTypes.func,
            type: PropTypes.string,
            value: PropTypes.string
        }))

    };

    render () {
        return (
            <Card>
                <Row expanded>
                    {this.renderDropDowns(this.props.dropdowns)}
                    {this.renderInputs(this.props.inputs)}
                </Row>
            </Card>
        );
    }

    renderDropDowns (dropdowns = []) {
        return dropdowns.map((dropdown)=> {
            return (
                <Col key={dropdown.label} medium={6} small={12}>
                    <Dropdown
                        auto
                        label={dropdown.label}
                        onChange={dropdown.onChange}
                        source={dropdown.source}
                        value={dropdown.value}
                    />
                </Col>
            );

        });
    }

    renderInputs (inputs) {
        return inputs.map((_input)=> {
            const {label, name, value, onChange, type, ...other} = _input;
            return (
                <Col key={label} medium={6} small={12}>
                    <Input
                        label={label}
                        name={name}
                        onChange={onChange} {...other}
                        type={type}
                        value={value}
                    />
                </Col>
            );

        });
    }
}

export default VGComponentForm;
