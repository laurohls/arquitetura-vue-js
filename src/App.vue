<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/pessoas">Pessoas</RouterLink></li>
    </ul>
  
   
  </nav>
  <main>
    <RouterView />
  </main>
</template>


<style>
/* Estiliza o menu */
nav ul {
  list-style-type: none; /* Remove os marcadores da lista */
  padding: 0;
  margin: 0;
  display: flex; /* Faz com que os itens da lista fiquem em linha */
  justify-content: center; /* Centraliza o menu horizontalmente */
}

/* Estiliza cada item da lista */
nav ul li {
  margin: 0 15px; /* Adiciona espaçamento entre os itens */
}

/* Estiliza os links dentro dos itens da lista */
nav ul li a {
  text-decoration: none; /* Remove sublinhado dos links */
  color: #333; /* Cor do texto */
  font-weight: bold;
  padding: 10px 15px; /* Espaçamento interno para aumentar o tamanho dos links */
  transition: background-color 0.3s ease; /* Efeito suave ao passar o mouse */
}

nav ul li a:hover {
  background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
  border-radius: 5px; /* Bordas arredondadas ao passar o mouse */
}

</style>