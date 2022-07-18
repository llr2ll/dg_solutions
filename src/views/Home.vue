<template>

        <Header />
  
		<main>
  			<section class="container">
          
  				<h2>Listar Pessoas</h2>
  				<label for="filtrar-tabela">Filtre:</label>
  				<input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome">
  				
				<User />
          
  				<span id="erro-ajax" class="invisivel">Erro ao buscar os pacientes</span>
  
  				<router-link to="/add"><Button msg='Criar'/></router-link>
  
  			</section>
		</main>

</template>

<script>
  
 import Header from '../components/Header.vue'
 import Button from '../components/Button.vue'
 import User from '../components/User.vue'

 export default {
    components: {
    Header,
    Button,
    User
	},
}
  
</script>

<style scoped>
  
  .container{ width: 60%; height: 100%; margin: 5% auto; }
  
  section{ margin: 2em 0; overflow: hidden; }
  
  section h2{ font-size: 3em; display: block; padding-bottom: .5em; border-bottom: 1px solid #ccc; margin-bottom: .5em; }
  
  .invisivel { display: none; }
    
</style>  