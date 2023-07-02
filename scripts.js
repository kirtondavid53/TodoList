
// let todoList = [
//     {text:"By chicken in price smart", completed:true},
//     {text:"pick mango", completed:false},
//     {text:"Wash the dishes", completed:true}
// ]

function getTodoListItems(items){
    str = ""
    console.log(items)
        if (items === null){
            return;
        }
        for (let item of items){
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
            <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i id=${item.id}
                class="fas fa-trash-alt del_btn"></i></a>
        </div>
        <div class="text-end text-muted">
            <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
            <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>28th Jun 2020</p>
            </a>
        </div>
        </li>
    </ul>`
        
    }

    // var checkboxes = document.querySelectorAll('#checked');
    // var itemTextList = document.querySelectorAll('#todoItemText');
    // num=0;
    // checkboxes.forEach((checkbox) => {
    //     if (items[num].completed == true){
    //         checkbox.checked = checked;
    //     }
    //     num++;
    // });

    // num=0;
    // itemTextList.forEach((itemText) => {
    //     if (items[num].completed == true){
    //         itemText.style.textDecoration = "line-through"
    //     }
    //     num++;
    // });

    // console.log(str)
    return str;
}

//Will do later
function changeCompleteStatus(){
   check_box = document.querySelector('#checked');

}


text_from_form = document.getElementById('exampleFormControlInput1')
console.log(text_from_form)

let loginForm = document.getElementById("loginForm");



// function is_local_Null(todoList){
//     if (localStorage.getItem(item) == null) {
//         localStorage.setItem(1, JSON.stringify(todoList))
//         return;
//     }
// }


loginForm.addEventListener("submit", (e) => {
    // e.preventDefault();
  
    var text_from_form = document.getElementById('exampleFormControlInput1').value
    
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null){
        existingEntries = [];
    }
    
    let item = {
        id:new Date().getTime(),
        text:text_from_form,
        completed:false
    }

    //console.log(text_from_form, " ", item.id)

    //localStorage.setItem('item', JSON.stringify(item));
    var exit = is_exit(existingEntries, item)
    
    if (exit === true){
        alert("This entry already exit")
    }

    else if (text_from_form === ""){
        alert("Please enter something in the form")
    }
    else if (exit == false){
        existingEntries.push(item);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    }
   

    console.log(existingEntries)
    document.getElementById('exampleFormControlInput1').value = "";
    document.getElementById('todoList').innerHTML = getTodoListItems(existingEntries);
  });

// localStorage.setItem(1, JSON.stringify(todo))

//console.log(item)

function is_exit(item, text_from_form){
    return item.text === text_from_form
}

function is_exit(existingEntries, item) {
    for(let entry of existingEntries){
            if (entry.text === item.text){
                return true
            }
    }
    return false;
    
}

let items = JSON.parse(localStorage.getItem("allEntries"));


console.log(items)

// getTodoListItems(todoList)


localStorage.clear();

let delete_btn = document.querySelector('.listItem');

delete_btn.addEventListener("click", (e) => {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if (e.target.tagName === "I" && e.target.classList.contains("del_btn")){
        index = searchArray(existingEntries, e.target.id)
        let x = existingEntries.splice(index, 1);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        document.getElementById('todoList').innerHTML = getTodoListItems(existingEntries)
    }
    

    // const index = myArray.indexOf(2);

   

    // console.log(`myArray values: ${myArray}`);
    // console.log(`variable x value: ${x}`);


});

function searchArray(arr, id){
    for(i=0; i<arr.length; i++){
        if(arr[i].id == id)
            return i;
    }
    return -1;
}

document.getElementById('todoList').innerHTML = getTodoListItems(items)
//console.log(items)

// localStorage.clear();
