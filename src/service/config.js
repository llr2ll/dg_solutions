import axios from 'axios'

export const Get = axios.get('/usuarios')
     .then((res) => { return this.usuarios = res.data })
  	 .catch((error) => {console.log(error);});

