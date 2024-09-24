<template>

    <div class="form_grupo">
        <label for="nome" class="form_label">Nome</label>
        <input type="text" v-model="form.nome" name="nome" class="form_input" id="nome" placeholder="Nome" required>
    </div>



</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FormularioType from '../types/FormularioPessoaType';

export default defineComponent({
    name: 'NomeComponent',
    components: {},
    props: {
        form: {
            type: Object as PropType<FormularioType>,
            required: true
        }
    },
    setup() {



        return {};
    }
});
</script>

<style scoped>
input {
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
}

p {
    font-size: 18px;
    margin-bottom: 10px;
}
</style>
