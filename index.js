

let count = 0;
let highestPriority = 0;

let app = new Vue({
    el: '#app',
    data: {
        title: "To-do",
        filter: null,
        inputText: "",
        inputPriority: "",
        todos: [{
            text: "Eat breakfast",
            priority: 1,
            id: 1
        },
        {
            text: "Do the laundry",
            priority: 2,
            id: 2
        }
        ]
    },

    methods: {
        remove: function (id) {
            const index = this.todos.findIndex(item => item.id === id)
            this.todos.splice(index, 1)
        },
        addToDo: function (e) {
            e.preventDefault()
            let todo = {
                text: this.inputText,
                priority: parseInt(this.inputPriority),
                id: count
            }

            let index = 0
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].priority >= todo.priority) {
                    index = i;
                    break;
                }
                index = i === this.todos.length - 1 ? i + 1 : i;
            }

            this.todos.splice(index, 0, todo);

            count++
            this.inputText = "";
            this.inputPriority = null;
        }
    }
})