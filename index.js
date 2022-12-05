

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
            text: "Make a to-do list",
            priority: 1,
            timeAdded: new Date()
        },
        {
            text: "Complete to-do list",
            priority: 2,
            timeAdded: new Date()
        }
    ],
        orderBy: "Priority"
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
                id: count,
                timeAdded: new Date()
            }

            this.todos.push(todo)

            if(this.orderBy === "Priority"){
                this.orderByPriority()
            }
            else{
                this.orderByDate()
            }

            count++
            this.inputText = "";
            this.inputPriority = null;
        },

        orderByPriority: function(){
            function compare(a, b){
                if(a.priority < b.priority){
                    return -1;
                }
                if(a.priority > b.priority){
                    return 1;
                }
                return 0;
            }

            this.todos.sort(compare)

            this.orderBy= 'Priority'
        },
        orderByDate: function () {
            function compare(a, b){
                if(a.timeAdded < b.timeAdded){
                    return -1;
                }
                if(a.timeAdded > b.timeAdded){
                    return 1;
                }
                return 0;
            }

            this.todos.sort(compare)

            this.orderBy= 'Date'
        }

    }
})