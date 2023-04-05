import { Box, List, ListItem, ListItemIcon, Typography,ListItemText ,Divider} from '@mui/material'
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Drawer from '@mui/material/Drawer';


const menuItems:string[]=['inbox','Starred','Send Email','Drafts']


export const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open={true}
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