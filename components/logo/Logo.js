import React, {PropTypes} from 'react';
import {CardMedia} from 'react-toolbox/lib/card';
import {Row, Col} from 'react-toolbox-addons/lib/grid';

/**
 *  Logo
 * @returns {JSX}
 * @constructor
 */
const Logo = ({aspectRatio, ...other})=> {
    return (
        <Row align="center" expanded>
            <Col small={4} medium={3} large={2}>
                <CardMedia {...other} aspectRatio="square"/>
            </Col>
        </Row>
    );
};

Logo.propTypes = {
    aspectRatio: PropTypes.oneOf(['wide', 'square']),
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    contentOverlay: PropTypes.bool,
    /**
     * image <String> url of the logo image
     */
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    theme: PropTypes.shape({
        cardMedia: PropTypes.string,
        content: PropTypes.string,
        contentOverlay: PropTypes.string,
        square: PropTypes.string,
        wide: PropTypes.string
    })
};

export default Logo;
