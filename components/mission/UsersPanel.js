import React, {PropTypes} from 'react';
import NavDrawerPlus from 'react-toolbox-addons/lib/nawdrawerplus';

/**
 * UsersPanel react component
 */
const UsersPanel = ({children, openState, onClick, addUser, style})=> {
    let btns = [];
    if (addUser) {
        btns.push({icon: 'person_add', className: 'person_add', onClick: addUser});
    }
    return (
        <NavDrawerPlus title="Users" openState={openState} pinned={openState !== 0} onClick={onClick}
                       buttons={btns} className='usersPanel'>
            <div style={{overflowY: 'auto', overflowX: 'hidden', ...style}}>
                {children}
            </div>
        </NavDrawerPlus>);
};
UsersPanel.propTypes = {
    /**
     * Callback1<DOMEvent> addUser - callback on user icon click
     */
    addUser: PropTypes.func,
    children: PropTypes.any,
    /**
     * <Boolean> open - property to indicate if the panel is open
     */
    onClick: PropTypes.func,
    /**
     * <Callback1<DOMEvent>> - onClick callback on close icon click
     */
    open: PropTypes.bool,
    openState: PropTypes.oneOf([0, 1, 2]),
    style: PropTypes.object
};
export default UsersPanel;
