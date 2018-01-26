var app = new Vue({
      el: '#root',
      data: {
        message: "Hey there!",
        tasks: [
          { description: 'Get up at 5 in the morning', completed: false },
          { description: 'Program 2 hours in the morning', completed: false },
          { description: 'Contact Jamie S.', completed: true }
        ]
      },

      methods: {
        toggle: function (task) {
          if (task.completed === false ) {
            task.completed = true
          } else {
            task.completed = false
          }
        }
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
