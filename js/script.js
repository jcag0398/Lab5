let post = $("#ButtonPost")
let clear = $("#ButtonClear")
let mark = $("#ButtonMark")
let del = $("#ButtonDelete")

postButton.on("click", TodoPost);
clearButton.on("click", clearTodos);
markButton.on("click", markTodos);
deleteButton.on("click", deleteTodos);

function TodoPost(e){
    e.preventDefault()
    let todo = $("#todoText")
    let list = $("#todoList")
    
    let div = $("<div>")
    let input = $("<input>")
    let label = $("<label>")
    input.attr("type","checkbox")
    input.attr("name", "todo")
    label.text(todo.val())

    div.append(input)
    div.append(label)
    list.append(div)

    todo.val("")
}

function TodoMark(){
    let todos = $("[name=todo]")
    todos.each(function markTodo(index, todo){
        $(todo).prop("checked", true)
    })
}

function TodoClear(){
    let todos = $("[name=todo]")
    todos.each(function markTodo(index, todo){
        $(todo).prop("checked", false)
    })
}

function TodoDel(){
    let todos = $("[name=todo]")
    todos.each(function markTodo(index, todo){
        if($(todo).prop("checked")){
            $(todo).parent().remove()
        }
    })
}
