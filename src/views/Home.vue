<template>

	<Header />

	<main>
		<section class="container">

			<h2>Listar Pessoas</h2>
			<table>

				<thead>
					<tr>
						<th>Nome</th>
						<th>Data de Nacimento</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for='user in users' :key='user.id'>
						<td class="info-nome">{{ user.nome }}</td>
						<td class="info-nascimento">
							<p>{{ user.dataNascimento.split('-').reverse().join('/') }}</p>
							<div>
								<router-link :to="{name: 'Edit', params: {name: user.nome, date: user.dataNascimento, id: user.id}}">
									<button class='btns'><img class='img' src='/pencil.svg' /></button>
								</router-link>
								<button @click="deleteData(user.id)" class='btns'><img class='img' src='/trash.png' /></button>
							</div>
						</td>
					</tr>
				</tbody>

			</table>

			<router-link class="router" to="/add"><Button msg='Criar' /></router-link>

		</section>
	</main>

</template>

<script>
	
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import axios from 'axios'
import { baseUrl } from '../App.vue'

export default {
	components: {
		Header,
		Button,
	},
	data() {
		return {
			users:[],
	  async showData() {
		  await axios.get(baseUrl)
					 .then((res) => { return this.users = res.data })
					 .catch((error) => { console.log(error) });
			},
			deleteData(id) {
				axios.delete(`${baseUrl}/usuarios/${id}`)
					 .then(() => { this.showData() })
					 .catch((error) => {console.log(error);});
			}
		}
	},
	mounted () {
		this.showData()
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

</style>  