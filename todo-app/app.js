var app = new Vue({
      el: '#root',
      data: {
        message: "Hey there!",
        tasks: [
          { description: 'Get up in the morning', completed: false },
          { description: 'Program 2 hours in the afternoon', completed: false },
          { description: 'Contact Jamie S.', completed: true }
        ]
      },

      methods: {

      },

      computed: {
        incompleteTasks() {
          return this.tasks.filter(task => ! task.completed);
        },
        completeTasks() {
          return this.tasks.filter(task => task.completed);
        }
      }
    })
