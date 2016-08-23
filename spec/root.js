/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import style from './style';

const Root = () => (
    <div className={style.app}>
        <h1>VG React Toolbox
            <small>Spec {VERSION}</small>
        </h1>
    </div>
);

export default Root;
