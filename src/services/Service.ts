import axios from "axios";
import { url } from "inspector";

export const api = axios.create({baseURL:'https://bloggeneration.herokuapp.com'

})
// /logar
export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
     const resposta = await api.post(url, dados) //dados do usuario
     setDado(resposta.data) 
} 

export const login = async (url: any, dados: any, setDado: any) => {
     const resposta = await api.post(url, dados) //dados do usuario
     setDado(resposta.data.token) // token e para validar o usuario
} 

export const busca = async (url: any, setDado: any, header: any) =>{
     const resposta = await api.get(url, header)
     setDado(resposta.data)
}