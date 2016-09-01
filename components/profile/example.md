### Profile Card & ProfileTitle example

```
import React, {Component} from 'react';
import ProfileCard from 'vg-react-toolbox/lib/profile/ProfileCard';
import {StyledInput, StyledDropdown} from 'react-toolbox-addons/lib/input-addons';
import EditableAvatar from 'react-toolbox-addons/lib/editable-avatar';
import ProfileTitle from 'vg-react-toolbox/lib/profile/ProfileTitle';
const countries = [
    {value: 'EN-gb', label: 'England'},
    {value: 'ES-es', label: 'Spain'},
    {value: 'TH-th', label: 'Thailand'},
    {value: 'EN-en', label: 'USA'}
];
class ProfilePageTest extends Component {
    state = {
        editmode: false,
        image: 'https://placeimg.com/80/80/animals'
    };

    render () {
        const editmode = this.state.editmode;
        return (
            <div style={{padding: 20}}>
                <ProfileCard
                    editmode={editmode}
                    onEdit={()=>this.setState({editmode: !editmode})}
                    onClose={()=>this.setState({editmode: false})}>
                    <ProfileTitle>
                        <EditableAvatar image={this.state.image}
                                        editable={editmode}
                                        onUpload={(file, result, e)=>this.setState({image: result})}
                        />
                        <StyledInput disabled={!editmode} white type='text' name='name' value='Ololosha Piakina'/>
                    </ProfileTitle>
                    
                    <StyledInput disabled={!editmode} type='text' label='name' name='name' value='Ololosha Piakina'/>
                    <StyledInput disabled={!editmode} type='text' label='name' name='name' value='Ololosha Piakina'/>
                    <StyledDropdown
                        auto
                        onChange={this.handleChange}
                        source={countries}
                        disabled={!editmode}
                        value='EN-gb'
                        label="label"
                    />
                </ProfileCard>

                <h5 style={{marginTop: 20}}>ProfileCard only title</h5>

                <ProfileCard
                    editmode={editmode}
                    onEdit={()=>this.setState({editmode: !editmode})}
                    onClose={()=>this.setState({editmode: false})}>
                    <ProfileTitle>
                        <StyledInput disabled={!editmode} white type='text' name='name' value='Ololosha Piakina'/>
                    </ProfileTitle>
                </ProfileCard>

                <h5 style={{marginTop: 20}}>ProfileCard no title</h5>

                <ProfileCard
                    editmode={editmode}
                    onEdit={()=>this.setState({editmode: !editmode})}
                    onClose={()=>this.setState({editmode: false})}>
                    <StyledInput disabled={!editmode} white type='text' name='name' value='Ololosha Piakina'/>
                </ProfileCard>
            </div>
        );
    }


}
```