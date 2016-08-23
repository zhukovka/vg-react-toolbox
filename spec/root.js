/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import style from './style';
import HardwareForm from './HardwareForm/index';


const Root = () => (
    <div className={style.app}>
        <h1>VG React Toolbox
            <small>Spec {VERSION}</small>
        </h1>
        <HardwareForm/>
    </div>
);

export default Root;
