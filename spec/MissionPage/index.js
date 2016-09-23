import React, {Component} from 'react';
import {Layout} from 'react-toolbox';
import {List, ListCheckbox} from 'react-toolbox/lib/list';
import {Button} from 'react-toolbox/lib/button';
import MissionBar from '../../components/mission/MissionBar';
import UsersPanel from '../../components/mission/UsersPanel';
import PlayerPanel from '../../components/mission/PlayerPanel';
import SidebarPlus from 'react-toolbox-addons/lib/sidebarplus';

class MissionPageTest extends Component {
    state = {
        sidePanelOpen: true,
        usersPanelOpen: true,
        sidePanelTitle: 'Map'
    };

    renderSidePanelContent (sidePanelTitle) {
        switch (sidePanelTitle) {
            case 'Weather':
                return (
                    <div>
                        {sidePanelTitle} panel
                    </div>
                );
            case 'Map':
                return (
                    <div>
                        {sidePanelTitle} panel
                    </div>
                );
            default:
                return <div>Empty</div>;
        }
    }

    render () {
        const missionBarProps = {
            userIconClick: (e)=> {
                this.setState({usersPanelOpen: !this.state.usersPanelOpen});
            },
            weatherClick: (e)=> {
                if (this.state.sidePanelOpen && this.state.sidePanelTitle !== 'Weather') {
                    this.setState({sidePanelTitle: 'Weather'});
                } else {
                    this.setState({sidePanelOpen: !this.state.sidePanelOpen, sidePanelTitle: 'Weather'});
                }
            },
            mapClick: (e)=> {
                if (this.state.sidePanelOpen && this.state.sidePanelTitle !== 'Map') {
                    this.setState({sidePanelTitle: 'Map'});
                } else {
                    this.setState({sidePanelOpen: !this.state.sidePanelOpen, sidePanelTitle: 'Map'});
                }
            }
        };

        return (
            <div>
                <MissionBar {...missionBarProps}/>
                <Layout>
                    <UsersPanel open={this.state.usersPanelOpen} onClick={(e)=> {
                            this.setState({usersPanelOpen: !this.state.usersPanelOpen});
                        }} addUser={()=>console.log('kuku')} style={{padding: '10px'}}>
                        <List selectable ripple>
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />
                        <ListCheckbox checked caption='Notify new comics' legend=' published' />

                        </List>
                        <Button label='BACK TO ORANIZATION LIST' primary />
                    </UsersPanel>
                    <PlayerPanel
                        expand={()=>this.setState({sidePanelOpen: !this.state.sidePanelOpen && !this.state.usersPanelOpen, usersPanelOpen: !this.state.sidePanelOpen && !this.state.usersPanelOpen})}>
                        <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/sGbxmsDFVnE?rel=0&amp;showinfo=0"
                                frameBorder="0" allowFullScreen ref={(iframe)=>console.log(iframe)}/>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolor doloremque
                            est hic iusto libero nihil numquam, obcaecati pariatur recusandae similique voluptates.
                            Adipisci odio optio praesentium quis reiciendis, vel.</h2>
                    </PlayerPanel>
                    <SidebarPlus title={this.state.sidePanelTitle} pinned={this.state.sidePanelOpen}>
                        {this.renderSidePanelContent(this.state.sidePanelTitle)}
                    </SidebarPlus>
                </Layout>
            </div>
        );
    }


}
export default MissionPageTest;
