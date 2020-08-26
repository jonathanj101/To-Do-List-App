/* GLOBAL VARIABLES */

let userInput = document.querySelector("#user-input")
let unordrd = document.querySelector("#main-lists__container")
let listsItem = document.querySelector("#lists-item")

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


        unordrd.insertAdjacentElement("afterbegin", listItem)
        listItem.insertAdjacentElement("beforeend", btnRemove)
        listItem.insertAdjacentElement('afterbegin', spanInputValue)
        btnRemove.innerHTML = '&times;'

        //console.log(spnUserText, spanInputValue, spanRemove)
    }
    //console.log(`keyCode = ${event.keyCode} code = ${event.code} `)
})

/* FUNCTION TO DELETE TASK*/


userInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        let listItems = document.querySelectorAll('li')
        let btnRemove = document.getElementsByTagName('button')
        let spanInputValue = document.createElement('span')
        let items = []

        for (let i = 0; i < listItems.length; i++) {
            items.push(listItems[i])
        }
        console.log(items)
        console.log(listItems[0])

        /*
        let item;
        for (let j = 0; j < items.length; j++) {
            item += items[j].innerHTML
        }
        console.log(item)
        */
        //console.log(unordrd)
        //console.log(listItems)
        /*
        for (let i = 0; i < listItems.length; i++) {
            items.push(listItems[i].innerHTML)
        }
        console.log(items)
        spanRemove.addEventListener('click', () => {

        })*/

    }
})


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