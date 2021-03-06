import React, {Component} from 'react';
import ProfileCard from '../../components/profile/ProfileCard';
import {StyledInput, StyledDropdown} from 'react-toolbox-addons/lib/input-addons';
import EditableAvatar from 'react-toolbox-addons/lib/editable-avatar';
import ProfileTitle from '../../components/profile/ProfileTitle';
import CardActionsSpaced from 'react-toolbox-addons/lib/cardactionsspaced';
import {Button} from 'react-toolbox/lib/button';
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
        const actions = (<CardActionsSpaced><Button icon='bookmark' label='Bookmark' accent/>
            <Button icon='bookmark' label='Bookmark' raised primary/></CardActionsSpaced>);
        return (
            <div style={{padding: 20}}>
                <ProfileCard primary
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

                <ProfileCard primary
                             editmode={editmode}
                             onEdit={()=>this.setState({editmode: !editmode})}
                             onClose={()=>this.setState({editmode: false})}
                             actions={actions}>
                    <ProfileTitle>
                        <h5>Main information</h5>
                    </ProfileTitle>
                </ProfileCard>

                <h5 style={{marginTop: 20}}>ProfileCard no title cols={1}</h5>

                <ProfileCard
                    editmode={editmode}
                    onEdit={()=>this.setState({editmode: !editmode})}
                    onClose={()=>this.setState({editmode: false})}
                    cols={1}>
                    <h5>Main information</h5>
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

                <h5 style={{marginTop: 20}}>ProfileCard no title cols={3}</h5>
                <ProfileCard
                    editmode={editmode}
                    onEdit={()=>this.setState({editmode: !editmode})}
                    onClose={()=>this.setState({editmode: false})}
                    cols={3}>
                    <h5>Main information</h5>
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

                <h5 style={{marginTop: 20}}>ProfileCard no title cols={4}</h5>
                <ProfileCard
                    editmode={editmode}
                    onEdit={()=>this.setState({editmode: !editmode})}
                    onClose={()=>this.setState({editmode: false})}
                    cols={4}>
                    <h5>Main information</h5>
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
                    <StyledDropdown
                        auto
                        onChange={this.handleChange}
                        source={countries}
                        disabled={!editmode}
                        value='EN-gb'
                        label="label"
                    />
                </ProfileCard>
            </div>
        );
    }


}
export default ProfilePageTest;
