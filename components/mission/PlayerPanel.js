import React, {PropTypes} from 'react';
import {Panel} from 'react-toolbox';
import VideoPanel from 'react-toolbox-addons/lib/videopanel';

const PlayerPanel = ({children, expand, fullscreen})=> {
    return (
        <Panel>
            <VideoPanel
                buttons={[{icon: 'view_array', inverse: true, onClick: (e)=>expand(e)}, {icon: 'fullscreen', inverse: true, onClick: (e)=>fullscreen(e)}]}>
                {children}
            </VideoPanel>
        </Panel>);
};
PlayerPanel.propTypes = {
    children: PropTypes.any,
    expand: PropTypes.func,
    fullscreen: PropTypes.func
};
export default PlayerPanel;
