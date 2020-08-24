/* GLOBAL VARIABLES */

let userInput = document.querySelector("#user-input")
let unordrd = document.querySelector("#main-lists__container")
let listsItem = document.querySelector("#lists-item")

/* EVENT LISTENER FOR USER INPUT*/
userInput.addEventListener('keydown', () => {
    if (event.keyCode === 13) {
        let list = document.createElement('li')
        let spanInputValue = document.createElement('span')
        let spanRemove = document.createElement('span')

        list.id = 'lists-item'
        spanInputValue.id = "inputValue"
        spanRemove.id = 'remove'

        let spnUserText = document.createTextNode(userInput.value)


        spanInputValue.appendChild(spnUserText)


        list.appendChild(spanInputValue)

        unordrd.insertAdjacentElement("afterbegin", list)
        list.insertAdjacentElement('beforeend', spanRemove)
        spanRemove.innerHTML = '&times;'

        console.log(list, spanInputValue, spanRemove)
    }
    console.log(`keyCode = ${event.keyCode} code = ${event.code} `)
})

/* FUNCTION TO DELETE TASK*/





/*

let userInput = document.querySelector("#user-input")
let listContainer = document.querySelector("#main-lists__container")

userInput.addEventListener('keydown', (event) => {
    note:: keycode is each keys on keyboard with its corresponding number. Enter === 13
    if (event.keyCode === 13) {
        listContainer.innerHTML = '<li>' + userInput.value + '</li>'
    }
    console.log(`keyCode = ${ event.keyCode } code = ${ event.code } `)
})
*/