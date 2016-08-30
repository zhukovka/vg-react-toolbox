import React, {PropTypes} from 'react';
import {Panel} from 'react-toolbox';
import VideoPanel from 'react-toolbox-addons/lib/videopanel';

/**
 * PlayerPanel react component
 */
const PlayerPanel = ({children, expand, fullscreen})=> {
    const video = Array.isArray(children) ? children[0] : children;
    const _children = Array.isArray(children) ? children.slice(1) : null;
    return (
        <Panel>
            <VideoPanel
                buttons={[{icon: 'view_array', inverse: true, onClick: (e)=>expand(e)}, {icon: 'fullscreen', inverse: true, onClick: (e)=>fullscreen(e)}]}>
                {video}
            </VideoPanel>
            {_children}
        </Panel>);
};
PlayerPanel.propTypes = {
    children: PropTypes.any,
    /**
     * Callback1<DOMEvent> expand - callback on expand icon click
     */
    expand: PropTypes.func,
    /**
     * Callback1<DOMEvent> fullscreen - callback on fullscreen icon click
     */
    fullscreen: PropTypes.func
};
export default PlayerPanel;
