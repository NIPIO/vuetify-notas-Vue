<template>
	<v-container>
		<v-card>
				<v-card-title>Lorem ipsum...</v-card-title>
				<v-card-text>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat laboriosam facilis itaque aliquam deserunt quia omnis quibusdam quaerat consequuntur libero consectetur necessitatibus quam, reiciendis assumenda quo deleniti alias inventore iste!</p>
				</v-card-text>
				<v-card-actions>
					<v-btn @click="dialogo = true">Abrir modal</v-btn>
				</v-card-actions>
		</v-card>
		<v-dialog v-model="dialogo" width="500">
			<v-card>
				<v-card-title>Lorem ipsum...</v-card-title>
				<v-card-text>
					<p>Un modal papu</p>
				</v-card-text>
				<v-card-actions>
					<v-btn @click="dialogo2 = true">Abrir otro</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog v-model="dialogo2" width="300">
			<v-card>
				<v-card-title>Lorem ipsum...</v-card-title>
				<v-card-text>
					<p>Otro modal papu</p>
				</v-card-text>
				<v-card-actions>
					<v-btn @click="dialogo2 = false">Cerrar este</v-btn>
					<v-btn @click="dialogo = false, dialogo2 = false">Cerrar lo do</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
    </v-container>
</template>
<script>

export default {
  name: 'Modal',
  components: {
  },
  data() {
  	return {
  		dialogo: false,
  		dialogo2: false
  	}
  }
}
</script>
