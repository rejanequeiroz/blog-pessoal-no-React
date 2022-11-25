import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import './Login.css'
import typography from 'typescript'
import { Box } from '@mui/material';


function Login(){
    return(
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center'>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined'name='usuario' margin='normal' fullWidth></TextField>

                        <TextField id='senha' label='senha' variant='outlined'name='senha' margin='normal' fullWidth type='password'></TextField>

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>Logar</Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Nao tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center'>Cadastrar</Typography>

                    </Box>
                    
                </Box>

            </Grid>
            <Grid item xs={6} className='imagem'></Grid>
            
        </Grid>
        </>
    );
}

export default Login