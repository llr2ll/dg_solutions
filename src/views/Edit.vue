<template>

	<Header />

	<section class="container">
		<h2 id="titulo-form">Editar: {{ this.$route.params.name }}</h2>
		<ul id="mensagens-erro"></ul>
		<form id="form-adiciona">
			<div class='spacer'>
				<label for="nome">Nome:</label>
				<input id="nome" name="nome" type="text" :placeholder='this.$route.params.name' class="campo">
			</div>
			<div class='spacer'>
				<label for="Nacimento">Data de Nacimento:</label>
				<input id="Nacimento" name="Nacimento" type="text" placeholder="digite a data de Nacimento"
					class="campo">
			</div>

			<router-link class="router" to="/"><Button msg='Editar' /></router-link>

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
}

</script>

<style>
section h2 {
	font-size: 3em;
	display: block;
	padding-bottom: .5em;
	border-bottom: 1px solid #ccc;
	margin-bottom: .5em;
}

.container {
	width: 60%;
	height: 100%;
	margin: 5% auto;
}

.campo {
	margin: 0;
	padding-bottom: 1em;
	width: 100%;
	border: 1px solid #ccc;
	padding: .7em;
	width: 100%;
}

#mensagens-erro {
	color: red;
}

.spacer {
	margin-top: 2%;
}
</style>