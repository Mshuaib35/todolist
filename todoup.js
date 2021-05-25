window.onload = function() {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')
  
  addtask.onclick = function() {
      //to enter the values in the list
      let li = document.createElement('li')

      //ADD delete button
      let xBtn = document.createElement('button')
      xBtn.innerText = '(X)'
       xBtn.onclick = function(event){
          event.target.parentElement.remove()
        }

        let upBtn = document.createElement('button')
        upBtn.innerText = 'up'
        upBtn.onclick = function (event){
            //event.target = the up button
            //event.target.parentElement = the <li> item

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //insert this element 
                event.target.parentElement.previousElementSibling //before the previous element

            )
        }

    
      //Add the task text
      let taskSpan = document.createElement('span')
      taskSpan.innerText = newtask.value
     
      
  
      li.appendChild(xBtn)
      li.appendChild(upBtn)
      li.appendChild(taskSpan)
      todolist.appendChild(li)
       
  }
  
  
  
  }
  