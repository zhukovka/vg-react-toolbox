import React, {Component} from 'react';
import ProfileCard from '../../components/profile/ProfileCard';
import {StyledInput, StyledDropdown} from 'react-toolbox-addons/lib/input-addons';
import EditableAvatar from 'react-toolbox-addons/lib/editable-avatar';
import ProfileTitle from '../../components/profile/ProfileTitle';
import Dialog from 'react-toolbox/lib/dialog';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {Row, Col} from 'react-toolbox-addons/lib/grid';
import {List, ListItem, ListSubHeader, ListDivider, ListCheckbox} from 'react-toolbox/lib/list';
import Input from 'react-toolbox/lib/input';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';
import FontIcon from 'react-toolbox/lib/font_icon';
const countries = [
    {value: 'EN-gb', label: 'England'},
    {value: 'ES-es', label: 'Spain'},
    {value: 'TH-th', label: 'Thailand'},
    {value: 'EN-en', label: 'USA'}
];
class ProfilePageTest extends Component {
    state = {
        editmode: false,
        image: 'https://placeimg.com/80/80/animals',
        active: true
    };
    handleToggle = () => {
        this.setState({active: !this.state.active});
    };

    actions = [
        {label: 'Cancel', onClick: this.handleToggle},
        {label: 'Save', onClick: this.handleToggle}
    ];
    vr = {
        borderRight: '1px solid'
    };
    render () {
        const editmode = this.state.editmode;
        const items = {
            download: 'Download',
            help: 'Favorite',
            settings: 'Open in app'
        };
        const rightAction = [(<span>
            <span>{this.state.selected}</span>
            <IconMenu icon='arrow_drop_down' position='topRight' menuRipple
                      onSelect={(value)=>this.setState({selected: items[value]})}>
                <MenuItem value='download' icon='get_app' caption='Download'/>
                <MenuItem value='help' icon='favorite' caption='Favorite'/>
                <MenuItem value='settings' icon='open_in_browser' caption='Open in app'/>
                <MenuDivider />
                <MenuItem value='signout' icon='delete' caption='Delete' disabled/>
            </IconMenu>
        <IconButton icon='clear' onClick={()=>console.log('kuku')}/></span>)];
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

                <div>
                    <Button label='Show my dialog' onClick={this.handleToggle}/>
                    <Dialog
                        actions={this.actions}
                        active={this.state.active}
                        onEscKeyDown={this.handleToggle}
                        onOverlayClick={this.handleToggle}
                        title="Add User"
                    >
                        <Row expanded collapse>
                            <Col small={12} medium={6} large={6}>
                                <Row expanded align='middle'>
                                    <Col>
                                        <Input type='tel' name='phone' value='123'/>
                                    </Col>
                                    <Col shrink>
                                        <FontIcon value='search'/>
                                    </Col>
                                </Row>
                                <ListDivider />
                                <List selectable ripple>
                                    <ListItem
                                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                                        caption='Dr. Manhattan'
                                        legend="Jonathan 'Jon' Osterman"
                                        rightIcon='star'
                                    />
                                    <ListItem
                                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                                        caption='Ozymandias'
                                        legend='Adrian Veidt'
                                        rightIcon='star'
                                    />
                                    <ListItem
                                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                                        caption='Rorschach'
                                        legend='Walter Joseph Kovacs'
                                        rightIcon='star'
                                    />
                                </List>
                            </Col>
                            <div style={this.vr}></div>
                            <Col small={12} medium={6} large={6}>
                                <List selectable>
                                    <ListItem
                                        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                                        caption='Dr. Manhattan'
                                        legend="Jonathan 'Jon' Osterman"
                                        rightActions={rightAction}
                                    />
                                </List>
                            </Col>
                        </Row>
                        <ListDivider />
                    </Dialog>
                </div>
            </div>
        );
    }


}
export default ProfilePageTest;
