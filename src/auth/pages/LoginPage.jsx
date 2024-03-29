import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginWithEmailPassword, startGoogleSignIn } from '../../store/auth'
import { useMemo } from 'react'

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();


  
  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [status] );
  
  

  const onSubmit = ( event ) => {
    event.preventDefault();
    //No es la acción a despachar
    dispatch(startLoginWithEmailPassword({email, password}));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };


  return (
    
    <AuthLayout title='Login'>

        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com'
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña'
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                autoComplete="off"
                // onClick={ dispatch(checkingAuthentication()) }
              />
            </Grid>


            <Grid 
              container
              display={ !!errorMessage ? '' : 'none' }
              sx={{mt: 1, mb: 1}}>
                
              <Grid item 
                xs={12}>
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

            </Grid>


            <Grid container spacing={2} sx={{mb:2, mt:1}}>

              <Grid item xs={12} sm={6}>
                <Button 
                  type="submit" 
                  variant='contained' 
                  fullWidth 
                  disabled={isAuthenticating}
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button  
                  variant='contained' 
                  fullWidth 
                  onClick={ onGoogleSignIn }
                  disabled={isAuthenticating}
                >
                  <Google />
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>




        </form>
    </AuthLayout>


  )
}
