<template>
	<v-container  grid-list-lg>
		<v-layout row wrap>
			<v-flex xs7>
				<v-card class="mb-3" v-for="(tarea, index) in listaTareas">
					<v-card-text>
						<v-chip label color="pink" text-color="white">
							<v-icon left>label</v-icon>
							{{tarea.titulo}}
						</v-chip>
						<p>{{tarea.descripcion}}</p>
					</v-card-text>
					<v-card-actions class="ml-2">
						<v-btn color="warning" @click="editarTarea(index)">Editar</v-btn>
						<v-btn color="error" @click="eliminarTarea(tarea.id)">Eliminar</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>	

			<v-flex xs5 v-if="!edicionTarea" >
				<v-card class="mb-3 pa-3">
					<v-form @submit.prevent="agregarTarea">
						<v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
						<v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
						<v-btn block color="success" type="submit">Agregar tarea</v-btn>
					</v-form>
				</v-card>	
			</v-flex>
			<v-flex xs5 v-if="edicionTarea">
				<v-card class="mb-3 pa-3">
					<v-form @submit.prevent="confirmarEdicion">
						<v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
						<v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
						<v-btn v-if="edicionTarea" block color="warning" type="submit">Editar tarea</v-btn>
					</v-form>
				</v-card>	
			</v-flex>	
		</v-layout>	
		<div class="text-center ma-2">
			<v-snackbar v-model="snackbar" :color="snackBarColor" :timeout="1500">
				{{snackBarMensaje}}
			</v-snackbar>
		</div>
	</v-container>
</template>


<script>

export default {
	name: 'Tareas-Crud',
	data() {
		return {
			titulo:'',
			descripcion:'',
			snackBarMensaje:'',
			snackBarColor:'',
			snackbar: false,
			edicionTarea: false,
			indexEditandose: '',
			listaTareas: []
		}
	},
	methods: {
	  	agregarTarea() {
	  		console.log(this.listaTareas)
	  		if(this.titulo === "" || this.descripcion === "") {
	  			this.snackbar = true
	  			this.snackBarMensaje = 'No puede haber campos vacios'
	  			this.snackBarColor = 'error'
	  		} else {
	  			this.listaTareas.push({
	  				id: Date.now(),
	  				titulo: this.titulo,
	  				descripcion: this.descripcion
	  			})
				this.titulo = ""
				this.descripcion = ""
				this.snackbar = true
	  			this.snackBarMensaje = 'Tarea agregada'
	  			this.snackBarColor = 'success'
	  		}
	  		this.storage()
	  	},
	  	eliminarTarea(id) {
	  		// this.listaTareas = this.listaTareas.filter(e => console.log(e.id)) 
	  		this.listaTareas = this.listaTareas.filter(e => e.id != id) //retorna todas las tareas distintas al id que le llega.
			this.snackbar = true
			this.snackBarMensaje = 'Tarea eliminada'
			this.snackBarColor = 'primary'
	  		this.storage()
	  	},
	  	editarTarea(id) {
	  		this.edicionTarea = true
	  		this.titulo = this.listaTareas[id].titulo
	  		this.descripcion = this.listaTareas[id].descripcion
	  		this.indexEditandose = id
	  	},
	  	confirmarEdicion() {
	  		if(this.titulo === "" || this.descripcion === "") {
	  			this.snackbar = true
	  			this.snackBarMensaje = 'No puede haber campos vacios'
	  			this.snackBarColor = 'error'
	  		} else {
	  			this.listaTareas[this.indexEditandose].titulo = this.titulo
	  			this.listaTareas[this.indexEditandose].descripcion = this.descripcion
				this.snackbar = true
	  			this.snackBarMensaje = 'Tarea editada'
	  			this.snackBarColor = 'warning'
		  		this.edicionTarea = false
				this.titulo = ""
				this.descripcion = ""
	  			this.storage()
	  		}
	  	},
	  	storage() {
	  		const lista = JSON.stringify(this.listaTareas);
			localStorage.setItem('listaTareas', lista);
	  		console.log(localStorage)
	  	}
	},
	mounted() {
		if (localStorage.length > 0) {
			this.listaTareas = JSON.parse(localStorage.getItem('listaTareas'))
		}
	}
}
</script>
