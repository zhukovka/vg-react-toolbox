import React, {Component} from 'react';
import HardWareForm from '../../components/hardwareform/HardWareForm';
import HardwareFields from '../../components/classes/HardwareFields.ts';
import FormActions from '../../components/classes/FormActions.ts';
class HardwareFormTest extends Component {

    constructor (props) {
        super(props);

        this.state = {
            typeError: ''
        };

        const sources = [{value: 'EN-gb', label: 'England'}, {value: 'ES-es', label: 'Spain'},
            {value: 'TH-th', label: 'Thailand'},
            {value: 'EN-en', label: 'USA'}];
        const uid = {
            label: 'Unique id',
            name: 'uid',
            key: 'uid-input',
            onChange (val){
                console.log(val);
            },
            type: 'text',
            value: '67676'
        };

        const type = {
            name: 'dd1',
            key: 'dd1',
            label: 'type',
            value: 'EN-gb',
            source: sources,
            onChange: (val)=>{
                console.log(val);
                this.setState({
                    typeError: 'ololo'
                }, ()=>console.log(this.state));
            },
            error: this.state.typeError
        };


        const manufacturer = {
            name: 'dd2',
            key: 'dd2',
            label: 'manufacturers',
            value: 'ES-es',
            source: sources,
            onAddAnother (){
                console.log('kukuruku');
            },
            onChange (val){
                console.log(val);
            }
        };
        const model = {
            name: 'dd3',
            key: 'dd3',
            label: 'model',
            value: 'TH-th',
            source: sources,
            onChange (val){
                console.log(val);
            }
        };

        const cancel = {
            key: 'cancel-btn',
            label: 'Cancel',
            type: 'button',
            onClick: ()=> {
                console.log('cancelled');
            }
        };
        const finish = {
            key: 'finish-btn',
            label: 'Finish',
            primary: true,
            type: 'submit',
            onClick: ()=> {
                console.log('finished');
            }
        };
        this.actions = new FormActions(cancel, finish);
        this.hardware = new HardwareFields(type, manufacturer, model, uid);
    }


    render () {
        return (
            <section>
                <h5><a href="https://invis.io/ST872JFNH#/182231979_MD_Add_New_Hardware_For_OrgAdmin">HardwareForm</a>
                </h5>
                <HardWareForm
                    onSubmit={(e)=>{
                        e.preventDefault();
                        console.log(this);
                    }}
                    info={this.hardware}
                    hardwareActions={this.actions}
                    onUpload={(file)=>console.log(file)}
                />
            </section>
        );
    }
}

export default HardwareFormTest;
