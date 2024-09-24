<template>
    <div>
      <h1>Lista Pessoas</h1>
      <button @click="$router.push('/pessoa-novo')">Novo</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(registro, index) in dados" :key="index">
            <td>{{ registro.id }}</td>
            <td>{{ registro.nome }}</td>
            <td>{{ registro.estado }}</td>
            <td>{{ registro.cidade }}</td>
            <td>{{ registro.dataNascimento }}</td>
            <td>
              <button>Editar</button> <button>Visualizar</button> <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
  
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
import '../../../../../shared/styles/tabela.css';
import { listaPessoa } from '../../services';
import PessoaType from '../../types/PessoaType';

  export default defineComponent({
    name: 'ListagemPessoaComponent',
    setup() {
      const dados = ref<PessoaType[]>([]);
     
      const getListagem = async () => {
        try {
          dados.value = await listaPessoa();  // Atribui o retorno da função ao valor da referência reativa
        } catch (error) {
          console.error('Erro ao buscar lista de pessoas:', error);
        }
      };
  
      onMounted(() => {
        getListagem();  // Chama a função ao montar o componente
      });
  
      return { dados };  // Retorna `dados` para o template
    },
  });
  </script>
  