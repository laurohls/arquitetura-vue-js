<template>
  <div class="container_form">
    <h1>Formulário de Cadastro</h1>
    
    <form class="form" @submit.prevent="salvar" ref="formulario">
      <!-- Importando e usando componentes individuais para os campos -->
      <nome-form :form="form" />
      <data-nascimento-form :form="form" />
      <cidade-form :form="form" />
      <estado-form :form="form" />

      <div class="submit">
        <input type="hidden" name="acao" value="enviar">
        <button type="submit" name="Submit" class="submit_btn">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import '../../../../../shared/styles/formulario.css';
import CidadeForm from '../../components/cidadeForm.vue';
import DataNascimentoForm from '../../components/dataNascimentoForm.vue';
import EstadoForm from '../../components/estadoForm.vue';
import NomeForm from '../../components/nomeForm.vue';
import { createPessoa } from '../../services';
import { FormularioType } from '../../types/FormularioPessoaType';

export default defineComponent({
  name: 'componenteForm',
  components: {
    NomeForm,
    CidadeForm,
    EstadoForm,
    DataNascimentoForm
  },
  setup() {
    // Inicializando o formulário com os tipos corretos
    const form = ref<FormularioType>({
      nome: '',
      cidade: 0, // ou a referência de `CidadeType` correta
      dataNascimento: '',
      estado: 0 // ou a referência de `UFType` correta
    });

    const salvar = async () => {
     
  try {
    // Chame a função `createPessoa` passando o objeto `form.value`
    const pessoaCriada = await createPessoa(form.value);

    // Exibir ou tratar o sucesso da criação
    console.log('Pessoa criada com sucesso:', pessoaCriada);
    alert('Cadastro realizado com sucesso');
  } catch (error) {
    // Tratamento de erro
    console.error('Erro ao cadastrar a pessoa:', error);
    alert('Erro ao cadastrar a pessoa');
  }
};

    return { form, salvar };
  }
});
</script>
