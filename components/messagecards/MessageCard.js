import React, {PropTypes} from 'react';
import {Card, CardMedia} from 'react-toolbox/lib/card';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import Logo from '../logo/Logo';
import {CardMediaPrimary} from 'react-toolbox-addons/lib/card-addons';

/**
 *  MessageCard
 */
const MessageCard = ({image})=> {
    return (
        <Card>
            <CardMediaPrimary>
                <Logo image={image}/>
            </CardMediaPrimary>
        </Card>
    );
};

MessageCard.propTypes = {
    image: PropTypes.string
};

export default MessageCard;
