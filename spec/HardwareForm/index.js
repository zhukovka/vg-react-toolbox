/**
 * Created by lenka on 23/08/2016.
 */
import React, {Component} from 'react';
import VGComponentForm from '../../components/vgcomponentform';

class HardwareForm extends Component {

    constructor (props) {
        super(props);
        const sources = [{value: 'EN-gb', label: 'England'}, {value: 'ES-es', label: 'Spain'},
            {value: 'TH-th', label: 'Thailand'},
            {value: 'EN-en', label: 'USA'}];
        const inp = {
            label: 'Unique id',
            name: 'uid',
            onChange (val){
                console.log('kuku');
            },
            type: 'text',
            value: '67676'
        };

        const dd1 = {
            name: 'dd1',
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
            label: 'manufacturers',
            value: 'ES-es',
            source: sources,
            onChange (val){
                this.value = val;
            }
        };
        const dd3 = {
            name: 'dd3',
            label: 'model',
            value: 'TH-th',
            source: sources,
            onChange (val){
                this.value = val;
            }
        };
        this.dropdowns = [dd1, dd2, dd3];
        this.inputs = [inp];
    }


    render () {
        return (
            <VGComponentForm
                dropdowns={this.dropdowns}
                inputs={this.inputs}/>
        );
    }
}

export default HardwareForm;
