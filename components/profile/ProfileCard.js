import React, {PropTypes, Component, Children} from 'react';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import {Card, CardText} from 'react-toolbox/lib/card';
import {CardTitleStyled, CardTitleButtons} from 'react-toolbox-addons/lib/card-addons';
/**
 * ProfileCard
 * see example https://github.com/zhukovka/vg-react-toolbox/blob/master/components/profile/example.md
 */
class ProfileCard extends Component {
    static propTypes = {
        actions: PropTypes.element,
        children: PropTypes.any,
        /**
         * set the Card to edit mode
         * Boolean editable
         */
        editable: PropTypes.bool,
        /**
         * set the Card to edit mode
         * Boolean editmode
         */
        editmode: PropTypes.bool,
        /**
         * Boolean hasError
         */
        hasError: PropTypes.bool,
        /**
         * event handler for cancel icon click
         * Callback1<DOMEvent> onCancel
         */
        onCancel: PropTypes.func,
        /**
         * event handler for close icon click
         * Callback1<DOMEvent> onClose
         */
        onClose: PropTypes.func,
        /**
         * event handler for confirm(check) icon click
         * Callback1<DOMEvent> onConfirm
         */
        onConfirm: PropTypes.func,
        /**
         * event handler for edit(pencil) icon click
         * Callback1<DOMEvent> onEdit
         */
        onEdit: PropTypes.func,
        /**
         * set to make header color primary
         * Boolean primary
         */
        primary: PropTypes.bool,
        /**
         * set number of columns to render
         * possible values 1, 2, 3, 4, 6
         * @default 2
         * int cols
         */
        cols: PropTypes.oneOf([1, 2, 3, 4, 6]),
        /**
         * style declaration for the card
         * Map<String, Srting> style
         */
        style: PropTypes.object
    };
    static defaultProps = {
        editable: true
    };

    constructor (props) {
        super(props);
    }

    renderButtons () {
        const {onEdit, onClose, onConfirm, onCancel, editmode, editable, hasError} = this.props;
        let buttons = [];
        if (editable) {
            buttons.push({
                icon: 'mode_edit',
                onClick: (e)=>onEdit(e)
            });
            if (onCancel) {
                buttons.unshift({
                    icon: 'not_interested',
                    onClick: (e)=>onCancel(e)
                });
            }

            if (editmode) {
                if (!hasError) {
                    buttons.push({
                        icon: 'check',
                        onClick: (e)=>onConfirm(e)
                    });
                }
                buttons.push({
                    icon: 'close',
                    onClick: (e)=>onClose(e)
                });
            }
        }
        return (<CardTitleButtons buttons={buttons}/>);
    }

    renderChildren (fields, sizes = {small: 12, medium: 6, large: 6}) {
        return fields.map((field, index)=> {
            if (index === fields.length - 1) {
                return (
                    <Col key={`col-${index}`}>
                        {field}
                    </Col>);
            }
            return (
                <Col key={`col-${index}`} {...sizes}>
                    {field}
                </Col>);
        });
    }

    render () {
        const {primary, cols, style, actions} = this.props;
        const size = 12 / (cols || 2);
        const children = Children.toArray(this.props.children);
        const cardStyle = Object.assign({overflow: 'visible'}, style);
        return (
            <Card style={cardStyle}>
                <CardTitleStyled primary={primary}>
                    {this.renderButtons()}
                    {children[0]}
                </CardTitleStyled>
                <CardText>
                    <Row expanded>
                        {this.renderChildren(children.slice(1), {small: 12, medium: size, large: size})}
                    </Row>
                </CardText>
                {actions}
            </Card>);
    }

}

export default ProfileCard;
