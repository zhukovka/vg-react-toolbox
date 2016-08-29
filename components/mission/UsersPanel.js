import React, {PropTypes} from 'react';
import NavDrawerPlus from 'react-toolbox-addons/lib/nawdrawerplus';

const UserPanel = ({children, open, onClick})=> {
    return (
        <NavDrawerPlus title="Users" active={open} pinned={open} onClick={onClick}>
            {children}
        </NavDrawerPlus>);
};
UserPanel.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool,
    onClick: PropTypes.func
};
export default UserPanel;
