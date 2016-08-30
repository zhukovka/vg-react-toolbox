/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import style from './style';
import HardwareForm from './HardwareForm/index';
import OrgMainInfoForm from './OrgMainInfoForm/index';
import OrgAccountInfoForm from './OrgAccountInfoForm/index';
import OrgAdminsForm from './OrgAdminsForm/index';
import Summary from './Summary';

const Root = () => (
    <div className={style.app}>
        <h1>VG React Toolbox
            <small>Spec {VERSION}</small>
        </h1>
        <HardwareForm/>
        <hr style={{margin: '50px'}}/>
        <OrgMainInfoForm/>
        <OrgAccountInfoForm/>
        <OrgAdminsForm/>
        <Summary/>
    </div>
);

export default Root;
