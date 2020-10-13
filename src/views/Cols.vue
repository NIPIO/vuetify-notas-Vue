<template>
	<v-container>
		<v-layout wrap>
			<v-flex class="text-center warning" xs12>
				<h1>12</h1>	
			</v-flex>	
			<v-flex class="text-center success" xs6>
				<h1>12</h1>	
			</v-flex>	
			<v-flex class="text-center secondary" xs6>
				<h1>12</h1>	
			</v-flex>	
		</v-layout>
		<v-layout class="mt-5 accent"  justify-center align-center style="height:300px">
			<v-flex class="error display-1" xs3>
				<h1>Centrado</h1>
			</v-flex>	
			<v-flex class="pink lighten-1 white--text" xs3>
				<h1>Centrado</h1>
			</v-flex>	
		</v-layout>	
	</v-container>
</template>


<script>

export default {
  name: 'Cols',
  components: {
  }
}
</script>
