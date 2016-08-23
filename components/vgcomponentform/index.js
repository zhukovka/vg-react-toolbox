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
            name: PropTypes.string,
            onChange: PropTypes.func,
            source: PropTypes.array
        })),
        inputs: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            onChange: PropTypes.func,
            type: PropTypes.string,
            value: PropTypes.string
        })),
        textareas: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            onChange: PropTypes.func,
            value: PropTypes.string
        })),
        buttons: PropTypes.arrayOf(PropTypes.shape({
                accent: PropTypes.bool,
                children: PropTypes.node,
                className: PropTypes.string,
                disabled: PropTypes.bool,
                flat: PropTypes.bool,
                floating: PropTypes.bool,
                href: PropTypes.string,
                icon: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.element
                ]),
                inverse: PropTypes.bool,
                label: PropTypes.string,
                mini: PropTypes.bool,
                neutral: PropTypes.bool,
                onMouseLeave: PropTypes.func,
                onMouseUp: PropTypes.func,
                primary: PropTypes.bool,
                raised: PropTypes.bool
            })
        )

    };

    constructor (props) {
        super(props);
        const dropdowns = this.props.dropdowns || [];
        const inputs = this.props.inputs || [];
        const textareas = this.props.textareas || [];

        this.state = [...dropdowns, ...inputs, ...textareas].reduce((_state, item)=> {
            _state[item.name] = item.value;
            return _state;
        }, {});
    }

    render () {
        return (
            <Card>
                <Row expanded>
                    {this.renderDropDowns(this.props.dropdowns)}
                    {this.renderInputs(this.props.inputs)}
                </Row>
                <CardActionsRight>
                    {this.renderCardActionsRight(this.props.buttons)}
                </CardActionsRight>
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
                        onChange={(val)=>this.setState({[dropdown.name]: val}, ()=>dropdown.onChange(val))}
                        source={dropdown.source}
                        value={this.state[dropdown.name]}
                    />
                </Col>
            );
        }, this);
    }

    renderInputs (inputs) {
        return inputs.map((_input)=> {
            const {label, name, type, onChange, value, ...other} = _input;

            return (
                <Col key={label} medium={6} small={12}>
                    <Input
                        label={label}
                        name={name}
                        onChange={(val)=>{
                        this.setState({[name]: val}, ()=>{
                            console.log(this.state[name]);
                        });
                        }}
                        type={type}
                        value={this.state[name]}
                        {...other}
                    />
                </Col>
            );
        }, this);
    }

    renderCardActionsRight (buttons = []) {
        return buttons.map((button)=> {
            return (
                <Button {...button}/>
            );
        });
    }
}

export default VGComponentForm;
