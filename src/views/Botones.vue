<template>
	<v-container class="text-center">
		<v-layout wrap>
			<v-flex xs12>
				<v-btn>Texto</v-btn>		
				<v-btn class="ma-2" color="blue" dark>Texto</v-btn>	
				<v-btn class="ma-2" color="blue" depressed>Sin sombra</v-btn>		
				<v-btn class="ma-2" color="primary">Texto</v-btn>		
				<v-btn class="ma-2" color="green" text>Sin fondo</v-btn>		
				<v-btn class="ma-2" color="green" large>Largo</v-btn>		
				<v-btn class="ma-2" color="pink" small dark>Chico</v-btn>	
				<v-btn class="ma-2" color="" disabled>Disabled</v-btn>		
			</v-flex>	
			<v-flex xs12>
				<v-btn x-large color="success" dark href="https://vuetifyjs.com/en/components/buttons/#buttons" target="_blank" block>Ir a vue botones 
              		<v-icon>forum</v-icon>
				</v-btn>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>

export default {
  name: 'Botones',
  components: {
  }
}
</script>

