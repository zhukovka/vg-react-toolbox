import React, {PropTypes} from 'react';
import {Card} from 'react-toolbox/lib/card';
import CardActionsSpaced from 'react-toolbox-addons/lib/cardactionsspaced';
import {IconButton} from 'react-toolbox/lib/button';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup/ButtonGroup';
import theme from './theme.scss';
/**
 * MissionBar react component
 */
const MissionBar = ({userIconClick, weatherClick, mapClick})=> {
    return (
        <Card className={theme.missionBar} theme={theme}>
            <CardActionsSpaced>
                <IconButton icon='supervisor_account' className={theme.missionbar_icon} onClick={(e)=>userIconClick(e)} theme={theme}/>
                <ButtonGroup>
                    <IconButton icon='wb_sunny' className={theme.missionbar_icon} onClick={(e)=>weatherClick(e)} theme={theme}/>
                    <IconButton icon='map' className={theme.missionbar_icon} onClick={(e)=>mapClick(e)} theme={theme}/>
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
