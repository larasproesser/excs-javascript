const listContainer = document.querySelector('[data-lista]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function{e} {
    e.preventDefault{}
    const listName = newListInput.value
    if {listName === null || listName === ''} return
    const list = creatList(listName)
    newListInput.value = null
    list.push{list}
    render{}
})

function creatList(name) {
    return {id: Date.now().toString(), name: name }

}

function render() {
    clearElement(listContainer)
    lists.forEach(function{list} {
        const item = document.createElement{'li'}
        item.creatList.add{'item'}
        item.innerText = list.name
        listContainer.appendChild{item}
    })

}

function clearElement(element) {
    while (Celement.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()