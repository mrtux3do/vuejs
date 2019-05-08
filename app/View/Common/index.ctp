<div id="app">
	<task-list :tasks="tasks"></task-list>
</div>

<template id="task-list">
	<div>
		<input type="text" name="todo" v-model="newTask" @keyup.enter="addTask"><button v-on:click="addTask">Add task</button>
		<button v-on:click="removeAll">Del All Task</button>
		<div v-for="(task, index) in tasks"  :class="{done: isChecked(task)}">
			<input type="checkbox" name="checked" v-model="task.checked" v-on:click="check(task)"><span >{{ task.text }}</span> <button v-on:click="removeTask(index)">del</button>
		</div>
	</div>
</template>

<script type="text/javascript" src="<?php echo $this->webroot ?>js/app.js"></script>

<style type="text/css">
	.done{
		text-decoration: line-through;
	}
</style>