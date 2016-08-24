/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import style from './style';
import HardwareForm from './HardwareForm/index';
import OrgAdminForm from './OrgAdminForm/index';


const Root = () => (
    <div className={style.app}>
        <h1>VG React Toolbox
            <small>Spec {VERSION}</small>
        </h1>
        <HardwareForm/>
        <hr style={{margin:'50px'}}/>
        <OrgAdminForm/>
    </div>
);

export default Root;
