import React, {PropTypes} from 'react';
import StepsList from 'react-toolbox-addons/lib/stepslist';
import {Card} from 'react-toolbox/lib/card';
import Step from '../classes/Step';

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
    steps: PropTypes.arrayOf(Step)
};

export default OrgFormSteps;
