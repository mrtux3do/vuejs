var taskList = Vue.component('task-list',{
	template: '#task-list',
	props: ['tasks'],
	data() {
		return {
			newTask: ''
		}
	},
	methods: {
		addTask: function(){
			if(this.newTask){
				this.tasks.push({
					text: this.newTask,
					checked: false
				});
				this.newTask = '';
			}
		},
		removeTask: function(index){
			this.tasks.splice(index, 1);
		},
		check: function(task){
			task.checked = true;
		},
		isChecked: function (task) {
			return task.checked;
		},
		removeAll: function(){
			this.tasks = [];
		}
	}

});

new Vue({
	el: '#app',
	data: {
		newTask: "",
		tasks: [{
			text: "This is example task",
			checked: false
		}],
		components: {
			taskList: taskList
 		},
	},
});
