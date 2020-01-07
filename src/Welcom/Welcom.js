import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'

export default function Welcom() {
    return (
        <div>
            <h1 style={{
                color: "Black",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '100px'
            }}>Welcome To Your Dashboard </h1>
            <h3>Click On <MenuIcon style={{ backgroundColor: '#48d3e1', color: 'white', fontSize: '35px' }} /> MENU  To Selection </h3>
        </div>
    )
}