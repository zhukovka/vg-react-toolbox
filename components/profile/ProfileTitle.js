import React, {PropTypes, Children} from 'react';
import {Row, Col} from 'react-toolbox-addons/lib/grid';

const ProfileTitle = ({children})=> {

    const renderChildren = function () {
        return Children.map(children, (item) => {
            return (
                <Col shrink>
                    {item}
                </Col>
            );
        });
    };
    return (<Row align="middle" expanded>{renderChildren()}</Row>);
};

ProfileTitle.propTypes = {
    children: PropTypes.any
};

export default ProfileTitle;
