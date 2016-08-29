import React, {PropTypes} from 'react';
import NavDrawerPlus from 'react-toolbox-addons/lib/nawdrawerplus';

const UsersPanel = ({children, open, onClick})=> {
    return (
        <NavDrawerPlus title="Users" active={open} pinned={open} onClick={onClick}>
            {children}
        </NavDrawerPlus>);
};
UsersPanel.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    open: PropTypes.bool
};
export default UsersPanel;
