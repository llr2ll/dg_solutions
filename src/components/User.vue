<template>

    <table>
            
  			<thead>
  				<tr>
  					<th>Nome</th>
  					<th>Data de Nacimento</th>
  				</tr>
  			</thead>
            
  			<tbody id="tabela-pacientes">
                    
  				<tr v-for='usuario in usuarios' :key='usuario.id' class="paciente" id="primeiro-paciente">
  						<td class="info-nome">{{usuario.name}}</td>
  						<td class="info-nascimento">
						    <p>{{usuario.date}}</p>
							<div>
								<router-link :to="`/edit/${usuario.name}`"><button class='btns'><img class='img' src='/pencil.svg' /></button></router-link>
								<button class='btns'><img class='img' src='/trash.png' /></button>
							</div>
                		</td>
  				</tr>

  			</tbody>
            
  	</table>

</template>

<script>
    export default{
        data() {
            return { usuarios: [
                    {id:1 , name:'Paulo',date:'08/12/1990'},
                    {id:2 , name:'Erika',date:'10/03/1977'},
                    {id:3 , name:'Roger',date:'22/08/1984'}
                ]
            }
        }
    }
</script>

<style>

  table{ width: 100%; margin-bottom: .5em; table-layout: fixed; }
  
  td, th { padding: .7em; margin: 0; border: 1px solid #ccc; text-align: center; }
  
  th{ font-weight: bold; background-color: #EEE; }

  .info-nascimento{ display: flex; align-items: center; justify-content: center; justify-content: space-between;}
  
  .img{ width: 20px; height: 20px;}
  
  .btns{margin: 0 5px; }
  
</style>