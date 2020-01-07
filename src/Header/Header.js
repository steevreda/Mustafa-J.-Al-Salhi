import React from 'react'
import '../App.css';
import MenuSlider from '../MenuSlider/MenuSlider'
import logo from '../Images/logo.png';
import Image from 'material-ui-image'
const styleys = {
    menuDiv: {
        marginLeft: '0px',
        paddingLeft: '0',
        position: 'absolute',
        float: 'left'
    },
    logo: {
        height: '50px',
        width: '50px',
        float: 'right'
    }
}
class Header extends React.Component {

    render() {

        return (
            <div style = {Mystyle.mainDiv}>
                <div style={styleys.menuDiv}>
                    <MenuSlider />
                </div>
                <div style={styleys.logo}>
                    <Image src={logo} />
                </div>
            </div>
        )
    }
}

const Mystyle = {
    mainDiv:{
        backgroundColor: '#48d3e1',
        height: '150px',
        padding: '20px',
        color: 'white'
    }
}

export default Header