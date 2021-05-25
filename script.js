window.onload = function() {
  let newtask = document.getElementById('newtask')
  let addtask = document.getElementById('addtask')
  let todolist = document.getElementById('todolist')

addtask.onclick = function() {
    //to enter the values in the list
    let li = document.createElement('li')
    li.innerText = newtask.value

    //creates the delete button
    let xBtn = document.createElement('button')
    xBtn.innerText = '(X)'
    
    xBtn.onclick = function(event){
        event.target.parentElement.remove()
    }

    li.appendChild(xBtn)
    todolist.appendChild(li)
}



}
