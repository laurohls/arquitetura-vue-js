<template>
     <div class="form_grupo">
        <label for="cidade" class="form_label">Cidade</label>
        <input type="text" v-model="form.cidade" name="cidade" class="form_input" id="cidade" placeholder="Cidade" required>
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

</style>
