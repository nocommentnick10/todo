export default class View{
    constructor(tasks){
        tasks.forEach((task) => {
            this.renderTasks(task)
        })
    }

    elements = {
        input: document.querySelector('#newTask'),
        form: document.querySelector('#form'),
        tasksList: document.querySelector('#tasksList')
    }

    renderTasks(taskObj){
        const completeClass = taskObj.taskStatus === 'done' ? 'completed' : ''
        const checked = taskObj.taskStatus === 'done' ? 'checked' : ''

        const taskHTML = `
        <li class="todo-item" data-id="${taskObj.id}">
            <label class="todo-item-label">
                <input class="checkbox" type="checkbox" ${checked} />
                <span class="${completeClass}">${taskObj.taskText}</span>
                <button class="btn btn-secondary btn-sm" data-del>Удалить</button>
            </label>
        </li>
        `

        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML)
    }

    clearInput(){
        this.elements.input.value = ''
    }

    changeStatus(taskObj){
        const taskEl = this.elements.tasksList.querySelector(`[data-id="${taskObj.id}"]`)

        const taskTextEl = taskEl.querySelector('span')

        if(taskObj.taskStatus === 'done'){
            taskTextEl.classList.add('completed')
        } else {
            taskTextEl.classList.remove('completed')
        }
    }

    rmvTask(taskObj){
        const taskEl = this.elements.tasksList.querySelector(`[data-id="${taskObj.id}"]`)
        taskEl.remove()
    }
}