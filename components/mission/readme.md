# MissionBar

## Properties

| Name          | Type    | Default  | Description|
|:-----|:-----|:-----|:-----|
| `userIconClick` | `Callback1<DOMEvent>`  | `undefined`     | callback for user icon click|
| `weatherClick`     | `Callback1<DOMEvent>`    | `undefined`  | callback for weather icon click|
| `mapClick`      | `Callback1<DOMEvent>`    | `undefined`  | callback for map icon click|



# UserPanel 

extends NawDrawer from [Layout](http://react-toolbox.com/#/components/layout)

## Properties

| Name          | Type    | Default  | Description|
|:-----|:-----|:-----|:-----|
| `open` | `Boolean`  | `undefined`     | determine if the user panel is open|
| `onClick`     | `Callback1<DOMEvent>`    | `undefined`  | callback for close icon click|

# PlayerPanel 

extends Panel from [Layout](http://react-toolbox.com/#/components/layout)

## Properties

| Name          | Type    | Default  | Description|
|:-----|:-----|:-----|:-----|
| `expand`     | `Callback1<DOMEvent>`    | `undefined`  | callback for expand icon click|
| `fullscreen`     | `Callback1<DOMEvent>`    | `undefined`  | callback for fullscreen icon click|

# SidebarPlus 

extends Sidebar from [Layout](http://react-toolbox.com/#/components/layout)

## Properties

additional to original SideBar properties 

| Name          | Type    | Default  | Description|
|:-----|:-----|:-----|:-----|
| `title`     | `String`    | `undefined`  | title for the sidebar |

### Example

```
import React, {Component} from 'react';
import {Layout} from 'react-toolbox';
import {List, ListItem} from 'react-toolbox/lib/list';
import MissionBar from 'vg-react-toolbox/lib/mission/MissionBar';
import UsersPanel from 'vg-react-toolbox/lib/components/mission/UsersPanel';
import PlayerPanel from 'vg-react-toolbox/lib/components/mission/PlayerPanel';
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
                return <div>Empty</div>
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
            <section>
                <MissionBar {...missionBarProps}/>
                <Layout>
                    <UsersPanel open={this.state.usersPanelOpen} onClick={(e)=> {
                            this.setState({usersPanelOpen: !this.state.usersPanelOpen});
                        }}>
                        <List selectable ripple>
                            <ListItem
                                avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                                caption='Dr. Manhattan'
                                legend="Jonathan 'Jon' Osterman"
                                rightIcon='star'
                            />
                        </List>
                    </UsersPanel>
                    <PlayerPanel
                        expand={()=>this.setState({sidePanelOpen: !this.state.sidePanelOpen && !this.state.usersPanelOpen, usersPanelOpen: !this.state.sidePanelOpen && !this.state.usersPanelOpen})}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sGbxmsDFVnE?rel=0&amp;showinfo=0"
                                frameBorder="0" allowFullScreen ref={(iframe)=>console.log(iframe)}/>
                    </PlayerPanel>
                    <SidebarPlus title={this.state.sidePanelTitle} pinned={this.state.sidePanelOpen}>
                        {this.renderSidePanelContent(this.state.sidePanelTitle)}
                    </SidebarPlus>
                </Layout>
            </section>
        );
    }
}
```

