<template>

	<Header />

	<section class="container">
		<h2>Editar: {{ name }}</h2>
		<form @submit.prevent="edit">
			<div class='spacer'>
				<label>Nome:</label>
				<input name="name" type="text" v-model="name" :value='name' class="campo" required>
			</div>
			<div class='spacer'>
				<label>Data de Nacimento:</label>
				<input name="born" type="date" v-model="born" :value='date' class="campo" required>
			</div>

			<Button @click="goToHome()" msg='Editar' />

		</form>
	</section>

</template>

<script>

import Header from '../components/Header.vue'
import Button from '../components/Button.vue'

export default {
	components: {
		Header,
		Button
	},
	created(){
      this.name = this.$route.params.name
	  this.date = this.$route.params.date	
	  this.id = this.$route.params.id
	},
	methods:{
		edit(){
			console.log(this.name,this.born,this.id)
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