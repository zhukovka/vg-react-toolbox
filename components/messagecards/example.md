# MessageCard

### Example

```
import React from 'react';
import MessageCard from 'vg-react-toolbox/lib/messagecards/MessageCard';
import {CardActionsSpaced} from 'react-toolbox-addons/lib/cardactionsspaced';
import {Button} from 'react-toolbox/lib/button';
const MessageCardTest = ()=>{
  return (
      <section>
          <h5>MessageCard</h5>
          <MessageCard image="https://placeimg.com/120/120/animals" message="Organization profile has been created successfully" title="Congratulations!">
              <CardActionsSpaced>
                  <Button label='BACK TO ORGANIZATION LIST' primary />
                  <Button label='VIEW ORGANIZATION PAGE' primary />
              </CardActionsSpaced>
          </MessageCard>
      </section>
  );
};

export default MessageCardTest;
```