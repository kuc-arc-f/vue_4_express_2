<template>
	<div id="app">
		<navbar />
		<router-view/>
	</div>
</template>

<script>
import navbar from './components/Layouts/Navbar'
//import HelloWorld from './components/HelloWorld.vue'
//import test1 from './components/test1.vue'

export default {
	name: 'app',
	components: {
		navbar
	}
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*/
</style>
