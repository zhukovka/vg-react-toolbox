import React, {PropTypes} from 'react';
import NavDrawerPlus from 'react-toolbox-addons/lib/nawdrawerplus';

/**
 * UsersPanel react component
 * @param children {array|object|node}
 * @param open {Boolean} property to indicate if the panel is open
 * @param onClick {Callback1<DOMEvent>} callback on close icon click
 * @returns {XML}
 * @constructor
 */
const UsersPanel = ({children, open, onClick})=> {
    return (
        <NavDrawerPlus title="Users" active={open} pinned={open} onClick={onClick}>
            {children}
        </NavDrawerPlus>);
};
UsersPanel.propTypes = {
    children: PropTypes.any,
    /**
     * open {Boolean} property to indicate if the panel is open
     */
    onClick: PropTypes.func,
    /**
     * onClick {Callback1<DOMEvent>} callback on close icon click
     */
    open: PropTypes.bool
};
export default UsersPanel;
