const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const deleteButtonLabel = 'Delete'

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const text = prompt('TODO text:')
  if(text)
    addTodo(text)
}

function addTodo(todoText){
  list.appendChild(createLiComponent(todoText))
  todoCounter(1)
  uncheckedCountSpanCounter(1)
}

function deleteTodo(todo){

  const checkBox = todo.getElementsByClassName(classNames['TODO_CHECKBOX'])
  if(!checkBox[0].checked){
    uncheckedCountSpanCounter(-1)
  }
  list.removeChild(todo)  
  todoCounter(-1)
}

function todoCounter(valueToBeAddedOrDeleted){
  let numOfItens = Number(itemCountSpan.innerHTML)
  itemCountSpan.innerHTML = numOfItens + valueToBeAddedOrDeleted
}

function uncheckedCountSpanCounter( valueToBeChanged){  
  let numOfItens = Number(uncheckedCountSpan.innerHTML)
  uncheckedCountSpan.innerHTML = numOfItens + valueToBeChanged
}

function createLiComponent(todoText){
  const liElement = document.createElement('li')
  liElement.setAttribute('class',classNames['TODO_ITEM'])

  liElement.appendChild(createCheckBox())
  liElement.appendChild(createText(todoText))
  liElement.appendChild(createDeleteButton())

  return liElement
}

function createCheckBox(){
  const checkb = document.createElement('input')
  checkb.setAttribute('type','checkbox')
  checkb.setAttribute('class', classNames['TODO_CHECKBOX'])

  checkb.addEventListener('change', e =>{
    if(e.target.checked){
      uncheckedCountSpanCounter(-1)
    }else{
      uncheckedCountSpanCounter(1)
    }
  })

  return checkb
}

function createText(todoText){
  const span = document.createElement('span')
  span.setAttribute("class", classNames['TODO_TEXT'])
  span.innerText = todoText
  return span
}

function createDeleteButton(){
  let delBtn = document.createElement('input')
  delBtn.setAttribute('type','button')
  delBtn.setAttribute('class',classNames['TODO_DELETE'])  
  delBtn.value = deleteButtonLabel

  delBtn.addEventListener('click', e => {
    deleteTodo(delBtn.parentElement)
})

  return delBtn
}