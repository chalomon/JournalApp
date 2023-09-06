import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";
import { useState } from "react";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {

  const [visible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible(!visible);
    console.log(visible)
  }



  return (
    <Box sx={{display: 'flex'}} className='animate__animated animate__fadeIn animate__faster'>
        
        <NavBar drawerWidth={drawerWidth} handleVisible={ handleVisible } />


        <SideBar drawerWidth={drawerWidth} handleVisible={ handleVisible } visible={visible} />


        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            
            <Toolbar></Toolbar>

            {children}

        </Box>
    </Box>
  )
}
