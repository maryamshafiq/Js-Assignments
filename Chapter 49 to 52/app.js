// /TASK 1
function addtext()
{
var fname = document.myform.first_name.value;
var lname = document.myform.last_name.value;
var email = document.myform.email.value;
document.write("Thank you! You have just entered the following:");
document.write("<pre>");
document.write("First Name    : " + fname +"</br>");
document.write("Last Name     : " + lname+"</br>");
document.write("Email Address : " + email+"</br>");
}

//TASK 2
function readmore(){
    var text = " I DON’T THINK I TALKED TO U ABOUT THIS BUT U REALLY SHOULD KNOWTHAT I AM SECRETLY A FLYING SAUSAGE NOT ONLY AM I A FLYING SAUSAGE BUT I AM THE FLYING SAUSAGE THAT TOOK THE WALKING CHEESEBURGERS PICKLES. "
    var parag = document.getElementById("pera")
    parag.innerHTML=text;
}



//TASK 3

function deleteRow(btn) {
         var row = btn.parentNode.parentNode;
         row.parentNode.removeChild(row);
       }



var list = document.getElementById("list")
function addTodo(){
    var todo_item = document.getElementById("todo-item")



    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")


    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","edt")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(editBtn)

    li.appendChild(delBtn)

  
    list.appendChild(li)
    console.log(li)
    todo_item.value=""
}


function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue = editValue
}
