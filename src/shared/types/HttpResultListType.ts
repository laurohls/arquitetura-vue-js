export interface HttpResultListType {
    message: string
    data: Daum[]
  }
  
  export interface Daum {
    id: number
    nome: string
    estado: string
    cidade: string
    dataNascimento: string
  }