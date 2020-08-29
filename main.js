/* GLOBAL VARIABLES */


let userInput = document.querySelector("#user-input")
let unordrd = document.querySelector("#main-lists__container")


/* EVENT LISTENER FOR USER INPUT*/


userInput.addEventListener('keydown', () => {
    let userTasks = []
    if (event.keyCode === 13) {
        //creating element at user's input 'enter'

        let listItem = document.createElement('li')
        let listBtnItem = document.createElement('li')
        let spanInputValue = document.createElement('span')
        let btnRemove = document.createElement('button')


        listItem.id = 'lists-item'
        listItem.className = userInput.value
        btnRemove.id = 'remove'
        listBtnItem.id = 'lists-item'
        spanInputValue.id = 'inputValue'
        btnRemove.className = userInput.value


        let spnUserText = document.createTextNode(userInput.value)



        spanInputValue.appendChild(spnUserText)
        listBtnItem.appendChild(btnRemove)

        if (userInput.value === '') {
            // if user input is empty, not to add it to the list
            alert('Empty Task, no Reminder!')
        } else {
            // adding task to the ul list
            unordrd.insertAdjacentElement("afterbegin", listItem)
            listItem.insertAdjacentElement("beforeend", btnRemove)
            listItem.insertAdjacentElement('afterbegin', spanInputValue)
            btnRemove.innerHTML = '&times;'
            userInput.value = ''

        }

        const listsItem = document.querySelectorAll('li')

        listsItem.forEach(function (item) {
            userTasks.push(item)
        })

        console.log(userTasks)
        console.log(listsItem)
        console.log(userTasks)
        /* local storage*/

        let date = new Date()

        let month = date.getMonth() + 1
        let day = date.getDay()
        let year = date.getFullYear()
        let minutes = date.getMinutes()

        const itemDetail = JSON.stringify({ id: `${month}/${day}/${year} ${minutes}` })

        const parse = JSON.parse(itemDetail)

        localStorage.setItem("userTask", parse)



    }

})

/* delete task*/
userInput.addEventListener('keyup', () => {
    if (event.keyCode === 13) {
        let btnRemove = document.querySelector('#remove')
        let spanInputValue = document.querySelector("#inputValue")
        btnRemove.addEventListener('click', (e) => {
            e.target.parentElement.remove()
        })
        /* mouseover event on x button to display line-through on task */
        btnRemove.addEventListener('mouseover', () => {
            if (spanInputValue.id === "inputValue") {
                spanInputValue.style.textDecoration = 'line-through'
            }
        })
        /* mouseout event on x button to not display line-through on task */
        btnRemove.addEventListener('mouseout', () => {
            if (spanInputValue.id === 'inputValue') {
                spanInputValue.style.textDecoration = 'none'
            }
        })
    }
})
