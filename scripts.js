
let todoList = [
    {text:"By chicken in price smart", completed:true},
    {text:"pick mango", completed:false},
    {text:"Wash the dishes", completed:true}
]

function getTodoListItems(todoList){
    str = ""
    for (let item of todoList){
       str +=  `<ul class="list-group list-group-horizontal rounded-0 bg-transparent">
       <li
       class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
       <div class="form-check">
           <input onclick="changeCompleteStatus()" id="checked" class="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
           aria-label="..."/>
       </div>
       </li>
       <li
       class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
       <p id="todoItemText" class="lead fw-normal mb-0">${item.text}</p>
       </li>
       <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
       <div class="d-flex flex-row justify-content-end mb-1">
           <a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
               class="fas fa-pencil-alt me-3"></i></a>
           <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
               class="fas fa-trash-alt"></i></a>
       </div>
       <div class="text-end text-muted">
           <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
           <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>28th Jun 2020</p>
           </a>
       </div>
       </li>
   </ul>`
    }

    var checkboxes = document.querySelectorAll('#checked');
    var itemTextList = document.querySelectorAll('#todoItemText');
    num=0;
    checkboxes.forEach((checkbox) => {
        if (todoList[num].completed == true){
            checkbox.checked = checked;
        }
        num++;
    });

    num=0;
    itemTextList.forEach((itemText) => {
        if (todoList[num].completed == true){
            itemText.style.textDecoration = "line-through"
        }
        num++;
    });

    // console.log(str)
    return str
}

function changeCompleteStatus(){
    is_checked = document.querySelector('#checked')
}

document.getElementById('todoList').innerHTML = getTodoListItems(todoList)

getTodoListItems(todoList)

// localStorage.setItem(1, JSON.stringify(todo))

// let  item = JSON.parse(localStorage.getItem(1))





