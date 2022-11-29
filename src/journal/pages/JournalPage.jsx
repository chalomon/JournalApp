import { async } from "@firebase/util"
import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>
      

      {
        (!!active)
        ?  <NoteView />
        :  <NothingSelectedView />
      }

      


      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={isSaving}
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
