document.addEventListener("DOMCOntentLoaded", function () {
    getFromLocalStorage()
})

let userInput = document.querySelector("#user-input")
let unordrd = document.querySelector("#main-lists__container")

userInput.addEventListener('keydown', () => {
    if (event.keyCode === 13) {
        addItem(userInput.value)
    }
})

let userTask = []

function addItem(input) {
    let spnUserText = document.createTextNode(input)
    let spanInputValue = document.createElement('span')
    spanInputValue.appendChild(spnUserText)
    spanInputValue.id = 'inputValue'
    let listItem = document.createElement('li')
    listItem.id = 'lists-item'

    let listBtnItem = document.createElement('li')
    let btnRemove = document.createElement('button')

    listItem.className = userInput.value
    btnRemove.id = 'remove'
    listBtnItem.id = 'lists-item'

    listBtnItem.appendChild(btnRemove)

    if (input.length < 2) {

        alert('Empty Task, no Reminder!')
    } else {
        userTask.push(input)
        unordrd.insertAdjacentElement("afterbegin", listItem)
        listItem.insertAdjacentElement("beforeend", btnRemove)
        listItem.insertAdjacentElement('afterbegin', spanInputValue)
        btnRemove.innerHTML = '&times;'
        userInput.value = ''
        addToLocalStorage(userTask)
        deleteTask(btnRemove, spanInputValue.textContent)

    }

}

function addToLocalStorage(userTask) {
    localStorage.setItem("Tasks", JSON.stringify(userTask))
}

function getFromLocalStorage() {
    tasks = JSON.parse(localStorage.getItem("Tasks"))
    if (tasks !== null) {
        taskArray = tasks
        tasks.forEach(task => {
            addItem(task)
        })
    }

}

function deleteTask(btnRemove, spanInputValue) {
    btnRemove.addEventListener('click', (e) => {
        e.target.parentElement.remove()
        let currentTask = userTask.filter(selectedTask => {
            return selectedTask !== spanInputValue
        })
        userTask = currentTask
        addToLocalStorage(userTask)
    })
    btnRemove.addEventListener('mouseover', () => {
        if (spanInputValue.id === "inputValue") {
            spanInputValue.style.textDecoration = 'line-through'
            spanInputValue.style.textDecorationColor = "red"
        }
    })
    btnRemove.addEventListener('mouseout', () => {
        if (spanInputValue.id === 'inputValue') {
            spanInputValue.style.textDecoration = 'none'
        }
    })
}