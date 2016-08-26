import React, {Component} from 'react';
import {AppBar, Checkbox, IconButton, Layout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import MissionLayout from '../../components/mission/MissionLayout';
class MissionPageTest extends Component {

    state = {
        permanentAt: 'lg',
        drawerOpen: false,
        drawerPinned: false,
        sidebarPinned: false,
        sidebarWidth: 5,
        loremIpsums: 1
    };

    toggleDrawer = (event) => {
        event.stopPropagation();
        this.setState({drawerOpen: !this.state.drawerOpen});
    };

    toggleDrawerPinned = () => {
        this.setState({drawerPinned: !this.state.drawerPinned});
    };

    changeDrawerPermanentAt = (value) => {
        this.setState({permanentAt: value});
    };

    toggleSidebar = (value) => {
        this.setState({sidebarPinned: (value === true)});
    };

    changeSidebarWidth = (value) => {
        this.setState({sidebarWidth: value});
    };

    fewer = (event) => {
        event.preventDefault();
        this.setState({loremIpsums: Math.max(0, this.state.loremIpsums - 1)});
    };

    more = (event) => {
        event.preventDefault();
        this.setState({loremIpsums: this.state.loremIpsums + 1});
    };

    render () {


        return (
            <section>
                <MissionLayout/>
            </section>
        );
    }
}
export default MissionPageTest;
