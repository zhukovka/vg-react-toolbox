import React, {PropTypes} from 'react';
import {Button} from 'react-toolbox/lib/button';
import {CardActionsSpaced} from 'react-toolbox-addons/lib/cardactionsspaced';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup/ButtonGroup';

/**
 *  ActionsBack react component
 * @returns {JSX}
 */
const ActionsBack = ({actions})=> {
    const {back, cancel, finish} = actions;
    return (
        <CardActionsSpaced style={{marginTop: 20}}>
            <Button {...back}/>
            <ButtonGroup>
                <Button {...cancel}/>
                <Button {...finish}/>
            </ButtonGroup>
        </CardActionsSpaced>
    );
};
ActionsBack.propTypes = {
    /**
     * actions <Object>
     */
    actions: PropTypes.object
};

export default ActionsBack;
