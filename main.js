/* GLOBAL VARIABLES */

let userInput = document.querySelector("#user-input")
let unordrd = document.querySelector("#main-lists__container")
let listsItem = document.querySelector("#lists-item")
let btnRemove = document.querySelector('#remove')



/* EVENT LISTENER FOR USER INPUT*/
userInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        let listItem = document.createElement('li')
        let listBtnItem = document.createElement('li')
        let spanInputValue = document.createElement('span')
        let btnRemove = document.createElement('button')

        listItem.id = 'lists-item'
        btnRemove.id = 'remove'
        listBtnItem.id = 'lists-item'
        spanInputValue.id = 'inputValue'
        btnRemove.className = userInput.value


        let spnUserText = document.createTextNode(userInput.value)



        spanInputValue.appendChild(spnUserText)
        listBtnItem.appendChild(btnRemove)

        if (userInput.value === '') {
            alert('Empty Task, no Reminder!')
        } else {
            unordrd.insertAdjacentElement("afterbegin", listItem)
            listItem.insertAdjacentElement("beforeend", btnRemove)
            listItem.insertAdjacentElement('afterbegin', spanInputValue)

            btnRemove.innerHTML = '&times;'
            userInput.value = ''

            /* delete task*/

            btnRemove.addEventListener('click', (e) => {
                e.target.parentElement.remove()
            })
            btnRemove.addEventListener('mouseover', () => {
                if (spanInputValue.id === "inputValue") {
                    spanInputValue.style.textDecoration = 'line-through'
                }
            })
            btnRemove.addEventListener('mouseout', () => {
                if (spanInputValue.id === 'inputValue') {
                    spanInputValue.style.textDecoration = 'none'
                }
            })

        }
    }

})
