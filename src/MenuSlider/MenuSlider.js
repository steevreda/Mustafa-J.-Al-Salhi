import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../Images/logo.png';
import Image from 'material-ui-image'
import UserIcon from '@material-ui/icons/Report'
import PostAddIcon from '@material-ui/icons/PostAdd'
import CommentIcon from '@material-ui/icons/Comment'
import MenuIcon from '@material-ui/icons/Menu'
import { Redirect } from 'react-router';


export default function MenuSlider() {

    const [state, setState] = React.useState({
        left: false,
        redirectReport: false,
        redirectPosts: false,
        redirectComments: false

    });

    const toggleDrawer = (side, open, from) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        switch (from) {
            case 'users':
                setState({ redirectReport: true, redirectPosts: false, redirectComments: false });
                return (
                    <Redirect to='/report' />
                )
            case 'posts':
                setState({ redirectReport: false, redirectPosts: true, redirectComments: false });
                return (
                    <Redirect to='/posts' />
                )
            case 'comments':
                setState({ redirectReport: false, redirectPosts: false, redirectComments: true });
                return (
                    <Redirect to='/comments' />
                )

            case 'null':
                setState({ ...state, [side]: open });
                break;
            default: ''
        }


    };

    const sideList = side => (
        <div
            style={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div style={{ backgroundColor: 'rgb(33, 45, 85)' }}>
                <Image src={logo} />
            </div>
            <List>
                {['Reports', 'Posts', 'Comments'].map((text, index) => {
                    switch (index) {
                        case 0:
                            return (
                                <ListItem button key={text} onClick={toggleDrawer('left', false, 'users')}>
                                    <ListItemIcon><UserIcon /> </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        case 1:
                            return (
                                <ListItem button key={text} onClick={toggleDrawer('left', false, 'posts')}>
                                    <ListItemIcon><PostAddIcon /></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        case 2:
                            return (
                                <ListItem button key={text} onClick={toggleDrawer('left', false, 'comments')}>
                                    <ListItemIcon><CommentIcon /></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                    }

                })}
            </List>
            <Divider />
        </div>
    );
    {
        return (

            <div>
                {
                    state.redirectReport === true ? <Redirect to='/report' /> :
                        state.redirectPosts === true ? <Redirect to='/soon' /> :
                            state.redirectComments === true ? <Redirect to='/soon' /> : ''
                }
                <div>

                    <Button style={{ color: 'white' }} onClick={toggleDrawer('left', true, 'null')}><MenuIcon /> Menu</Button>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false, 'null')}>
                        {sideList('left')}
                    </Drawer>
                </div>

            </div>
        );


    }


}
