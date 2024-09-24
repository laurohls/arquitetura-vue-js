<template>
     <div class="form_grupo">
        <label for="dataNascimento" class="form_label">Data Nascimento</label>
        <input type="text" v-model="form.dataNascimento" name="dataNascimento" class="form_input" id="dataNascimento" placeholder="Data Nascimento" required>
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
        

        
        return {  };
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
