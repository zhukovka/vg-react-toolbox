/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import style from './style';
import VGComponentForm from '../components/vgcomponentform/index';
const sources = [{value: 'EN-gb', label: 'England'}, {value: 'ES-es', label: 'Spain'},
    {value: 'TH-th', label: 'Thailand'},
    {value: 'EN-en', label: 'USA'}];
const inp = {
    label: 'Unique id', name: 'uid',
    onChange: ()=> {
        console.log('kuku');
    },
    type: 'text',
    value: ''
};

const _dropdowns = [{label: 'type', value: 'EN-gb', source: sources}, {
    label: 'manufacturers',
    value: 'TH-th',
    source: sources
}, {label: 'model', value: 'ES-es', source: sources}];
const Root = () => (
    <div className={style.app}>
        <h1>VG React Toolbox
            <small>Spec {VERSION}</small>
        </h1>
        <VGComponentForm
            dropdowns={_dropdowns}
            inputs={[inp]}/>
    </div>
);

export default Root;
