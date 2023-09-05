import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SideBarItem } from "./";
import { useState } from "react";



export const SideBar = (props, {drawerWidth = 240}) => {

    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

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

      const { window } = props;

      const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm:0} }}
    >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>

    </Box>
  )
}
