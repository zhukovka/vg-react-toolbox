import React, {PropTypes} from 'react';
import {Card} from 'react-toolbox/lib/card';
import CardActionsSpaced from 'react-toolbox-addons/lib/cardactionsspaced';
import {IconButton} from 'react-toolbox/lib/button';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup/ButtonGroup';

/**
 * MissionBar react component
 */
const MissionBar = ({userIconClick, weatherClick, mapClick})=> {
    return (
        <Card>
            <CardActionsSpaced>
                <IconButton icon='supervisor_account' onClick={(e)=>userIconClick(e)}/>
                <ButtonGroup>
                    <IconButton icon='wb_sunny' onClick={(e)=>weatherClick(e)}/>
                    <IconButton icon='map' onClick={(e)=>mapClick(e)}/>
                </ButtonGroup>
            </CardActionsSpaced>
        </Card>);
};
MissionBar.propTypes = {
    /**
     * Callback1<DOMEvent> mapClick - callback on map icon click
     */
    mapClick: PropTypes.func,
    /**
     * Callback1<DOMEvent> userIconClick - callback on user icon click
     */
    userIconClick: PropTypes.func,
    /**
     * Callback1<DOMEvent> weatherClick - callback on weather icon click
     */
    weatherClick: PropTypes.func
};
export default MissionBar;
