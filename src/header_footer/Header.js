import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
// import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
// import { Menu } from '@material-ui/core';
import SideDrawer from './SideDrawer'

class Header extends Component {


    state={
        drawerOpen:false,
        
    }


    toggleDrawer=(value)=>{
        this.setState({
            drawerOpen:value
        })
    }

    render() {
        return (
            <AppBar
                position='fixed'
                style={{
                    backgroundColor:'#2f2f2f',
                    boxShadow:'none',
                    padding:'1px 0px'
                }}
>
                <ToolBar>
                    <div className='header_logo' style={{flexGrow:'1'}} >
                        <div className='font_righteous header_logo_venue'>Player</div>
                        <div className='header_logo_title'>Manager 2019</div>
                    </div>


                    <IconButton
                        ariel-label='Menu'
                        color='inherit'
                        onClick={()=>this.toggleDrawer(true)}
                    >
                        {/* <MenuIcon/> */}
                    </IconButton>

                    <SideDrawer 
                    open={this.state.drawerOpen}
                    onClose={(value)=>this.toggleDrawer(value)}
                    />


                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;

