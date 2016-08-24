/**
 * Created by lenka on 23/08/2016.
 */
import React, {Component} from 'react';
import VGComponentForm from '../../components/vgcomponentform/index';

class HardwareForm extends Component {

    constructor (props) {
        super(props);
        const sources = [{value: 'EN-gb', label: 'England'}, {value: 'ES-es', label: 'Spain'},
            {value: 'TH-th', label: 'Thailand'},
            {value: 'EN-en', label: 'USA'}];
        const inp = {
            label: 'Unique id',
            name: 'uid',
            key: 'uid-input',
            onChange (val){
                console.log('kuku');
            },
            type: 'text',
            value: '67676'
        };

        const dd1 = {
            name: 'dd1',
            key: 'dd1',
            label: 'type',
            value: 'EN-gb',
            source: sources,
            onChange (val){
                console.log(val, 'KUU');
                this.value = val;
            }
        };


        const dd2 = {
            name: 'dd2',
            key: 'dd2',
            label: 'manufacturers',
            value: 'ES-es',
            source: sources,
            onChange (val){
                this.value = val;
            }
        };
        const dd3 = {
            name: 'dd3',
            key: 'dd3',
            label: 'model',
            value: 'TH-th',
            source: sources,
            onChange (val){
                this.value = val;
            }
        };
        this.dropdowns = [dd1, dd2, dd3];
        this.inputs = [inp];

        const btn1 = {
            key: 'cancel-btn',
            label: 'Cancel',
            onClick: ()=> {
                console.log('cancelled');
            }
        };
        const btn2 = {
            key: 'finish-btn',
            label: 'Finish',
            primary: true,
            onClick: ()=> {
                console.log('cancelled');
            }
        };
        this.buttons = [btn1, btn2];
    }


    render () {
        return (
            <VGComponentForm
                dropdowns={this.dropdowns}
                inputs={this.inputs}
                buttons={this.buttons}
            />
        );
    }
}

export default HardwareForm;
