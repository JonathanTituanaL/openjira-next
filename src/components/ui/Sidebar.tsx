import { Box, List, ListItem, ListItemIcon, Typography,ListItemText ,Divider,Drawer } from '@mui/material'
import React, { useContext } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { UIContext } from '@/context/ui';


const menuItems:string[]=['inbox','Starred','Send Email','Drafts']


export const Sidebar = () => {

    const  {sidemenuOpen,closeSideMenu} = useContext (UIContext);

  return (
    <Drawer
        variant='temporary'
        anchor='left'
        open={sidemenuOpen}
        onClose={closeSideMenu}
    >
        <Box sx={{width:250}}>
        <Box
            sx={{padding:'5px 10px'}}
        >
             <Typography variant='h4'>Menú</Typography>
        </Box>
            <List>
                {
                    menuItems.map((text,index)=>(
                        <ListItem button key={text}>
                                <ListItemIcon>
                                    { index %2 ?  (<AccessAlarmIcon/>):(<AttachEmailIcon/>)}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider/>
        </Box>
    </Drawer>
  )
}