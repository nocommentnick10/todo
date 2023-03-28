export default class Model{
    constructor(){
        this.tasks = []
        this.loadFromLocalStorage()
    }

    loadFromLocalStorage(){
        const data = localStorage.getItem('tasks')
        data ? this.tasks = JSON.parse(data) : 0
    }

    saveToLocalStorage(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    addTask(taskText){
        let id = 1

        if(this.tasks.length > 0){
            id = this.tasks[this.tasks.length - 1]['id'] + 1
        }

        const newTask = {
            id,
            taskStatus: 'active',
            taskText: taskText
        }

        this.tasks.push(newTask)
        this.saveToLocalStorage()

        return newTask
    }

    findTask(id){
        const task = this.tasks.find(function(task){
            if(task.id === parseInt(id)){
                return true
            }
        })

        return task
    }

    changeStatus(task){
        if(task.taskStatus === 'active'){
            task.taskStatus = 'done'
        } else {
            task.taskStatus = 'active'
        }
        this.saveToLocalStorage()
    }

    rmvTask(task){
        const taskIndex = this.tasks.indexOf(task)
        this.tasks.splice(taskIndex, 1)
        this.saveToLocalStorage()
    }
}