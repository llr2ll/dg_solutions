<template>

	<Header />

	<section class="container">

		<h2>Adicionar nova pessoa</h2>
		<form @submit.prevent="save">
			<div class='spacer'>
				<label>Nome:</label>
				<input name="name" type="text" placeholder="digite o nome" class="campo" v-model="name" required>
			</div>
			<div class='spacer'>
				<label>Data de Nacimento:</label>
				<input name="born" type="date" v-model="born" class="campo" required>
			</div>
			<Button @click="goToHome()" msg='Adicionar' />
		</form>

	</section>

</template>

<script>

import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import axios from 'axios'

export default {
	components: {
		Header,
		Button
	},
	methods:{
		save(){
			var name = this.name
			var born = this.born
			axios.post('/usuarios/insert',{nome: name,dataNascimento: born}).then()
		},
		goToHome(){
   		this.$router.push('/'); 
      }	
	}
}

</script>

<style>

section h2 {font-size: 3em; display: block; padding-bottom: .5em; border-bottom: 1px solid #ccc; margin-bottom: .5em;}

.container {width: 60%; height: 100%; margin: 5% auto;}

.campo {margin: 0; padding-bottom: 1em; width: 100%; border: 1px solid #ccc; padding: .7em; width: 100%;}

.spacer {margin-top: 2%;}

</style>