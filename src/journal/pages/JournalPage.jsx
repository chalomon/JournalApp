import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae saepe magni voluptatibus vitae, fuga qui! Mollitia pariatur repudiandae laborum asperiores, temporibus iusto, eveniet culpa non tempora qui, dicta ab unde?
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView />  */}


      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 50

        }}
      >
        <AddOutlined />

      </IconButton>


    </JournalLayout>
    
  )
}
