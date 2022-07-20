<template>

	<Header />

	<main>
		<section class="container">

			<h2>Listar Pessoas</h2>
			<label for="filtrar-tabela">Filtre:</label>
			<input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome">

			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Data de Nacimento</th>
					</tr>
				</thead>

				<tbody id="tabela-pacientes">

					<tr v-for='user in users' :key='user.id' class="paciente" id="primeiro-paciente">
						<td class="info-nome">{{ user.nome }}</td>
						<td class="info-nascimento">
							<p>{{ user.dataNascimento.split('-').reverse().join('/') }}</p>
							<div>
								<router-link :to="{name: 'Edit', params: {name: user.nome, date: user.dataNascimento, id: user.id}}" birthday='usuario.date'>
									<button class='btns'><img class='img' src='/pencil.svg' /></button>
								</router-link>
								<button  @click="alert()" class='btns'><img class='img' src='/trash.png' /></button>
							</div>
						</td>
					</tr>

				</tbody>
			</table>

			<span id="erro-ajax" class="invisivel">Erro ao buscar os pacientes</span>

			<router-link class="router" to="/add"><Button msg='Criar' /></router-link>

		</section>
	</main>

</template>

<script>
	
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import {Get} from '../service/config'

export default {
	components: {
		Header,
		Button,
	},
	data() {
		return {
			users:[]
		}
	},
	mounted () {
		Get.then(Response => {this.users = Response})
	}
}

</script>

<style scoped>
.container {width: 60%; height: 100%; margin: 5% auto;}

table {width: 100%; margin-bottom: .5em; table-layout: fixed;}

td,th {padding: .7em; margin: 0; border: 1px solid #ccc; text-align: center;}

th {font-weight: bold; background-color: #EEE;}

.info-nascimento {display: flex; align-items: center; justify-content: center; justify-content: space-between;}

.img {width: 20px; height: 20px;}

.btns {margin: 0 5px;}

section {margin: 2em 0; overflow: hidden;}

section h2 {font-size: 3em; display: block; padding-bottom: .5em; border-bottom: 1px solid #ccc; margin-bottom: .5em;}

.invisivel {display: none;}

</style>  