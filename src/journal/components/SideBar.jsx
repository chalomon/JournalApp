import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({drawerWidth = 240, visible, handleVisible}) => {

    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

    


    const drawer = (
        <>
                    <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    notes.map(note => (
                        <SideBarItem
                            key={ note.id } 
                            {...note} />
                    ))
                }
            </List>
        </>
    );

  return (

      <Box
      component='nav'
      sx={{width: {sm: drawerWidth}, flexShrink: {sm:0} }}
      >
        <Drawer
            variant='permanent' //permanent si quiere mostrarse siempre
            open={true}
            sx={{
                display: {xs: 'none', sm: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            {drawer}

        </Drawer>

        <Drawer
            variant='temporary' //temporary si es que quiere ocultarse
            open={visible}
            sx={{
                display: {xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
            onClose={handleVisible}
        >
            {drawer}

        </Drawer>

    </Box>
  )
}
