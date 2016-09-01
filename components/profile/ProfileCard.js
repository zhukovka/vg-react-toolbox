import React, {PropTypes, Component, Children} from 'react';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import {Card, CardText} from 'react-toolbox/lib/card';
import {CardTitlePrimary, CardTitleButtons} from 'react-toolbox-addons/lib/card-addons';

/**
 * ProfileCard
 * see example
 */
class ProfileCard extends Component {
    static propTypes = {
        children: PropTypes.any,
        /**
         * set the Card to edit mode
         * <Boolean> editmode
         */
        editmode: PropTypes.bool,
        /**
         * event handler for close icon click
         * <Callback1<DOMEvent>> onClose
         */
        onClose: PropTypes.func,
        /**
         * event handler for confirm(check) icon click
         * <Callback1<DOMEvent>> onClose
         */
        onConfirm: PropTypes.func,
        /**
         * event handler for edit(pencil) icon click
         * <Callback1<DOMEvent>> onClose
         */
        onEdit: PropTypes.func
    };

    constructor (props) {
        super(props);
    }

    renderButtons () {
        const {onEdit, onClose, onConfirm, editmode} = this.props;
        let buttons = [{
            icon: 'mode_edit',
            onClick: (e)=>onEdit(e)
        }];

        if (editmode) {
            buttons = [{
                icon: 'check',
                onClick: (e)=>onConfirm(e)
            }, {
                icon: 'close',
                onClick: (e)=>onClose(e)
            }];
        }
        return (<CardTitleButtons buttons={buttons}/>);
    }

    renderChildren (fields) {
        return fields.map((field, index)=> {
            return (
                <Col key={`col-${index}`} small={12} medium={6} large={6}>
                    {field}
                </Col>);
        });
    }

    render () {
        const children = Children.toArray(this.props.children);
        return (
            <Card>
                <CardTitlePrimary>
                    {this.renderButtons()}
                    {children[0]}
                </CardTitlePrimary>
                <CardText>
                    <Row expanded>
                        {this.renderChildren(children.slice(1))}
                    </Row>
                </CardText>
            </Card>);
    }


}

export default ProfileCard;
