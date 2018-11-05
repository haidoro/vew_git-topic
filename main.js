new Vue({
	el:'#app',
	data: {
		list: [],
		current: '',
		topics: [
			{value:'javascript',name:'JavaScript'},
			{value:'vue',name:'Vue.js'},
			{value:'react',name:'React'},
			{value:'angular',name:'Angular'},
			{value:'wordpress',name:'WordPress'},
		]
	},
	watch: {
		current: function(val){
			axios.get('https://api.github.com/search/repositories',{
				params:{q:'topic:' + val }
			}).then(function(response){
				this.list = response.data.items
			}.bind(this))
		}
	},

})