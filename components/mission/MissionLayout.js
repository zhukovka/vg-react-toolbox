import React, {PropTypes} from 'react';
import VGComponentForm from '../vgcomponentform';
import {CardActionsSpaced} from 'react-toolbox-addons/lib/cardactionsspaced';
import ButtonGroup from 'react-toolbox-addons/lib/buttongroup/ButtonGroup';
import {Button} from 'react-toolbox/lib/button';
import {Row} from 'react-toolbox-addons/lib/grid';
import AccountInfo from '../classes/AccountInfo';
import FormActionsBack from '../classes/FormActionsBack';
import {AppBar, Checkbox, IconButton} from 'react-toolbox';
import {Layout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import {RadioGroup, RadioButton} from 'react-toolbox/lib/radio';
import Dropdown from 'react-toolbox/lib/dropdown';
import {List, ListItem, ListSubHeader, ListDivider, ListCheckbox} from 'react-toolbox/lib/list';
const sidebarWidths = [
    {value: 4, label: '4 incr'},
    {value: 5, label: '5 incr'},
    {value: 6, label: '6 incr'},
    {value: 7, label: '7 incr'},
    {value: 8, label: '8 incr'},
    {value: 9, label: '9 incr'},
    {value: 10, label: '10 incr'},
    {value: 25, label: '25%'},
    {value: 33, label: '33%'},
    {value: 50, label: '50%'},
    {value: 66, label: '66%'},
    {value: 75, label: '75%'}
];

class MissionLayout extends VGComponentForm {
    static propTypes = {};

    constructor (props) {
        super(props);
        this.state = {
            permanentAt: 'lg',
            drawerOpen: false,
            drawerPinned: false,
            sidebarPinned: false,
            sidebarWidth: 5,
            loremIpsums: 1
        };
    }

    render () {
        const rng = Array.from(new Array(this.state.loremIpsums), (x, i) => i);
        return (
            <Layout>
                <NavDrawer active={this.state.drawerOpen} pinned={this.state.drawerPinned}
                           permanentAt={this.state.permanentAt} onOverlayClick={this.toggleDrawer}>
                    <AppBar>
                        <h5>Users</h5>
                    </AppBar>
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
                        <ListDivider />
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
                </NavDrawer>
                <Panel>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <section style={{ margin: '1.8rem'}}>
                                <h5>NavDrawer State</h5>
                                <p>Drawer becomes permanent when window is....</p>
                                <RadioGroup name='permanentAt' value={this.state.permanentAt}
                                            onChange={this.changeDrawerPermanentAt}>
                                    <RadioButton label='Small' value='sm'/>
                                    <RadioButton label='Medium' value='md'/>
                                    <RadioButton label='Large' value='lg'/>
                                    <RadioButton label='Extra Large' value='xl'/>
                                    <RadioButton label='Never' value={undefined}/>
                                </RadioGroup>
                                <Checkbox label='Pin drawer' checked={this.state.drawerPinned}
                                          onChange={this.toggleDrawerPinned}/>
                            </section>

                            <section style={{ margin: '1.8rem'}}>
                                <h5>Sidebar State</h5>
                                <RadioGroup name='sidebarPinned' value={this.state.sidebarPinned}
                                            onChange={this.toggleSidebar}>
                                    <RadioButton label='Pinned' value/>
                                    <RadioButton label='Unpinned' value={false}/>
                                </RadioGroup>
                                <h5>Sidebar Width</h5>
                                <Dropdown
                                    auto
                                    onChange={this.changeSidebarWidth}
                                    source={sidebarWidths}
                                    value={this.state.sidebarWidth}
                                />
                            </section>
                        </div>

                        <section style={{ margin: '1.8rem' }}>
                            <h5>Scrollable Content</h5>
                            <p>
                                The center pane should scroll independently from
                                the sides. Show
                                [<a href='#' onClick={this.fewer}>-</a>]
                                {`${this.state.loremIpsums}`}
                                [<a href='#' onClick={this.more}>+</a>] paragraph(s) below this one.
                            </p>
                            {rng.map((x, i) => <p key={i}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aperiam, architecto deserunt ducimus eaque eius, est explicabo, fuga harum ipsum
                                laboriosam minus odio porro quasi quia sapiente ullam velit veniam voluptatem.</p>)}
                        </section>
                    </div>
                </Panel>
                <Sidebar pinned={true} width={Number(this.state.sidebarWidth)}>
                    <div style={{ flex: 1, margin: '1.8rem' }}>
                        <h5>Sidebar</h5>
                        <p>
                            Sidebar content should be secondary to the main content on a page.
                        </p>
                        <p>
                            The width of the sidebar can be set either in <em>increments</em>
                            (where 1 increment = height of the app bar) or in percentages.
                        </p>
                        <p>
                            As per the spec, the right sidebar expands to cover the entire
                            screen at small screen sizes.
                        </p>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}

export default MissionLayout;
