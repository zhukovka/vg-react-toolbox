import React, {PropTypes} from 'react';
import StepsList from 'react-toolbox-addons/lib/stepslist';
import {Card} from 'react-toolbox/lib/card';

const OrgFormSteps = (props)=> {
    return (
        <Card>
            <div style={{padding: '20px'}}>
                <StepsList steps={props.steps}/>
            </div>
        </Card>
    );
};

OrgFormSteps.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        active: PropTypes.bool,
        done: PropTypes.bool
    }))
};

export default OrgFormSteps;
