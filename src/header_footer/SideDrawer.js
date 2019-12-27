import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {Link} from 'react-router-dom'
import { FaHome, FaServicestack, FaAlipay, FaBootstrap, FaContao} from 'react-icons/fa'


const SideDrawer = (props) => {
            console.log("buuton OnClick")


    return (
       
        <Drawer anchor='right'
        open={props.open}
        onClose={()=>props.onClose(false)}
        >

            <List component='nav'>
                <ListItem button onClick={()=>props.onClose(false)}>
                <Link to="/Services" className="Sider-Word">
                    Services<FaServicestack/>
                </Link> 
                </ListItem>

                <ListItem button onClick={()=>props.onClose(false)}>
                <Link Link to="/Payment"className="Sider-Word">
                    Payment<FaAlipay/>
                    </Link>
                </ListItem>

                <ListItem button onClick={()=>props.onClose(false)}>
                <Link to="/Booking" className="Sider-Word">
                    Booking<FaBootstrap/>
                </Link>
                </ListItem>
                <ListItem button onClick={()=>props.onClose(false)}>
                <Link to="/Contact" className="Sider-Word">
                    Contact<FaContao/>
                </Link>
                </ListItem>
                <ListItem button onClick={()=>props.onClose(false)}>
                <Link to="/Home" className="Sider-Word">
                    Home<FaHome/>
                </Link>
                </ListItem>


            
            </List>
        </Drawer>
    );
};

export default SideDrawer;