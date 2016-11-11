/**
 * Created by mitya on 8/23/16.
 */
import React, {Component, PropTypes} from 'react';
import {Card} from 'react-toolbox/lib/card';
import {CardActionsRight} from 'react-toolbox-addons/lib/cardactionsright';
import {Button} from 'react-toolbox/lib/button';
import DropdownPlus from 'react-toolbox-addons/lib/dropdownplus';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import Input from 'react-toolbox/lib/input';

class VGComponentForm extends Component {
    static propTypes = {
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
                key: PropTypes.string.isRequired,
                label: PropTypes.string,
                mini: PropTypes.bool,
                neutral: PropTypes.bool,
                onMouseLeave: PropTypes.func,
                onMouseUp: PropTypes.func,
                primary: PropTypes.bool,
                raised: PropTypes.bool,
                theme: PropTypes.shape({
                    accent: PropTypes.string,
                    button: PropTypes.string,
                    flat: PropTypes.string,
                    floating: PropTypes.string,
                    icon: PropTypes.string,
                    inverse: PropTypes.string,
                    mini: PropTypes.string,
                    neutral: PropTypes.string,
                    primary: PropTypes.string,
                    raised: PropTypes.string,
                    rippleWrapper: PropTypes.string,
                    toggle: PropTypes.string
                }),
                type: PropTypes.string
            })
        ),
        dropdowns: PropTypes.arrayOf(PropTypes.shape({
            allowBlank: PropTypes.bool,
            auto: PropTypes.bool,
            className: PropTypes.string,
            disabled: PropTypes.bool,
            error: PropTypes.string,
            key: PropTypes.string.isRequired,
            label: PropTypes.string,
            name: PropTypes.string,
            onAddAnother: PropTypes.func,
            onBlur: PropTypes.func,
            onChange: PropTypes.func,
            onFocus: PropTypes.func,
            source: PropTypes.array.isRequired,
            template: PropTypes.func,
            theme: PropTypes.shape({
                active: PropTypes.string,
                disabled: PropTypes.string,
                dropdown: PropTypes.string,
                error: PropTypes.string,
                errored: PropTypes.string,
                field: PropTypes.string,
                label: PropTypes.string,
                selected: PropTypes.string,
                templateValue: PropTypes.string,
                up: PropTypes.string,
                value: PropTypes.string,
                values: PropTypes.string
            }),
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })),
        inputs: PropTypes.arrayOf(PropTypes.shape({
            children: React.PropTypes.any,
            className: React.PropTypes.string,
            disabled: React.PropTypes.bool,
            error: React.PropTypes.string,
            floating: React.PropTypes.bool,
            hint: React.PropTypes.string,
            icon: React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.element
            ]),
            key: PropTypes.string.isRequired,
            label: React.PropTypes.string,
            maxLength: React.PropTypes.number,
            multiline: React.PropTypes.bool,
            name: React.PropTypes.string,
            onBlur: React.PropTypes.func,
            onChange: React.PropTypes.func,
            onFocus: React.PropTypes.func,
            onKeyPress: React.PropTypes.func,
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
        onSubmit: PropTypes.func,
        textareas: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string,
            name: PropTypes.string,
            onChange: PropTypes.func,
            value: PropTypes.string
        }))
    };

    constructor (props) {
        super(props);
        const dropdowns = this.props.dropdowns || [];
        const inputs = this.props.inputs || [];
        const textareas = this.props.textareas || [];
        this.state = this.setInitialState([...dropdowns, ...inputs, ...textareas]);
    }

    setInitialState (items) {
        return items.reduce((_state, item)=> {
            if (!item.key) {
                throw new Error('Key property is required by VGComponentForm');
            }
            _state[item.key] = item.value;
            return _state;
        }, {});
    }

    renderDropDowns (dropdowns = []) {
        return dropdowns.map((dropdown)=> {
            const {key, onChange, value, ...other} = dropdown;
            return (
                <Col key={`col-${key}`} medium={6} small={12}>
                    <DropdownPlus
                        onChange={(val)=>this.setState({[key]: val}, ()=>onChange(val))}
                        value={this.state[key]}
                        {...other}
                    />
                </Col>
            );
        }, this);
    }

    renderInputs (inputs) {
        return inputs.map((input)=>this.renderInput(input), this);
    }

    renderInput (_input, sizes = {small: 12, medium: 6, large: 6}) {
        /*eslint no-unused-vars:0*/
        const {key, onChange, value, ...other} = _input;
        return (
            <Col key={`col-${_input.key}`} {...sizes}>
                <Input
                    onChange={(val)=>this.setState({[key]: val}, ()=>onChange(val))}
                    value={this.state[key] || ""}
                    {...other}
                />
            </Col>
        );
    }

    renderCardActionsRight (buttons = []) {
        return buttons.map((button)=> {
            return (
                <Button {...button}/>
            );
        });
    }

    renderFormContent () {
        return (
            <fieldset>
                <Row expanded>
                    {this.renderDropDowns(this.props.dropdowns)}
                    {this.renderInputs(this.props.inputs)}
                </Row>
                <CardActionsRight>
                    {this.renderCardActionsRight(this.props.buttons)}
                </CardActionsRight>
            </fieldset>
        );
    }

    render () {
        return (
            <Card>
                <form action="" onSubmit={this.props.onSubmit}>
                    {this.renderFormContent()}
                </form>
            </Card>
        );
    }


}

export default VGComponentForm;
