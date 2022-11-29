import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import './Login.css'
import typography from 'typescript'
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../../models/UserLogin';
import { login } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';


function Login(){
    /*
    a maior parte dos Hooks precisarao de uma variavel para acessar o seu valor e uma funçao para modificar os seus dados

    1- criaremos o Hook userState do tipo UserLogin, definindo seus valores iniciais.

    2- um metodo para recuperar as informaçoes do ususario.

    3- chamar o metodos dentro dos TextField

    4- criaremos o Hook userLocalStorage para armazenar o token que vamos trazer da API

    5-

     */
   // userLogin puxa os dados do usuario // setUserLogin vai atualizar e guardar os dados do usuario
const navigate = useNavigate()
   const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token:''

    })
 // updateModel vai recuperar as informaçao ou atualizar
 // e é uma variavel pode ser qualquer coisa

    function updateModel(e:ChangeEvent<HTMLInputElement>){

    setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
    })
}

useEffect(() => {
    if(token != ''){
        navigate('/home')
    }
}, [token])

async function onSubmit (e: ChangeEvent<HTMLFormElement>){
   e.preventDefault()
      try{

        await login('/usuarios/logar', userLogin, setToken)

        alert('Usuario logado com Sucesso !')

      }catch(error){

        alert('Dados incorretos !')

      }
}

    return(
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center' className='textos1'>Entrar</Typography>

                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuario' variant='outlined'name='usuario' margin='normal' fullWidth></TextField>

                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined'name='senha' margin='normal' fullWidth type='password'></TextField>

                        <Box marginTop={2} textAlign='center'>
                            

                            <Button type='submit' variant='contained' color='primary'>Logar</Button>

                        

                            </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Nao tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastrar</Typography>

                    </Box>
                    
                </Box>

            </Grid>
            <Grid item xs={6} className='imagem'></Grid>
            
        </Grid>
        </>
    );
}

export default Login

function userEffect() {
    throw new Error('Function not implemented.');
}
