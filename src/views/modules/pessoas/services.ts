import axios from 'axios'
import FormularioPessoaType from './types/FormularioPessoaType'
import PessoaType from './types/PessoaType'

const http = axios.create({
  baseURL: `http://localhost:3000`,
  headers: { 'Content-Type': 'application/json' }
})

export async function getPessoaById (itemId: string): Promise<FormularioPessoaType> {
  const response = await http.get(`/pessoas/${itemId}`)
  return response.data
}

export async function createPessoa (item: FormularioPessoaType): Promise<PessoaType> {
  const response = await http.post('/pessoas', JSON.stringify(item))
  return response.data
}

export async function listaPessoa(): Promise<any> {
  try {
    const response = await http.get('/pessoas');
    
    const retorno =  response.data.data as PessoaType[];  // Garantir que os dados sejam do tipo PessoaType[]
 
    return retorno;
  } catch (error) {
    console.error('Erro ao listar pessoas:', error);
    throw error;  // Repropagar o erro para ser tratado em outro lugar
  }
}
