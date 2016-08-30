import React, {PropTypes} from 'react';
import {Card, CardText} from 'react-toolbox/lib/card';
import Logo from '../logo/Logo';
import {CardMediaPrimary} from 'react-toolbox-addons/lib/card-addons';

/**
 *  MessageCard
 *  see example in example.md (https://github.com/zhukovka/vg-react-toolbox/blob/master/components/messagecards/example.md)
 */
const MessageCard = ({image, message, title, children})=> {
    return (
        <Card>
            <CardMediaPrimary>
                <div style={{margin: '5rem 0'}}>
                    <Logo image={image} />
                </div>
            </CardMediaPrimary>
            <CardText style={{textAlign: 'center'}}>
                <h3>{title}</h3>
                <h5>{message}</h5>
            </CardText>
            {children}
        </Card>
    );
};

MessageCard.propTypes = {
    children: PropTypes.any,
    /**
     * url to use as the logo
     * <String> image
     */
    image: PropTypes.string,
    /**
     * message to show as a card text
     * <String> message
     */
    message: PropTypes.string,
    /**
     * card title
     * <String> title
     */
    title: PropTypes.string
};

export default MessageCard;
