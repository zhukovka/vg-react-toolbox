import React from 'react';
import MessageCard from '../../components/messagecards/MessageCard';
import {CardActionsSpaced} from 'react-toolbox-addons/lib/cardactionsspaced';
import {Button} from 'react-toolbox/lib/button';
const MessageCardTest = ()=>{
  return (
      <section>
          <h5>MessageCard</h5>
          <MessageCard image="https://placeimg.com/120/120/animals" message="Organization profile has been created successfully" title="Congratulations!">
              <CardActionsSpaced>
                  <Button label='BACK TO ORANIZATION LIST' primary />
                  <Button label='VIEW ORANIZATION PAGE' primary />
              </CardActionsSpaced>
          </MessageCard>
      </section>
  );
};

export default MessageCardTest;
