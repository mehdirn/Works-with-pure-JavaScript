var Todos = [
    { id : 1 , title : 'writing' , isDoing : false },
    { id : 2 , title : 'studying' , isDoing : false },
    { id : 3 , title : 'reading' , isDoing : false }
]

    // menu todo
var menuTodo = Number(prompt('Please select an option : \n \n 1 = Add Todo \n 2 = Deleted Todo \n 3 = Doing Todo'))

if( menuTodo === 1 ){
    // add Todo
    var addTodo = prompt('Enter new name uesr for add todo')
    var newTodo = Todos.push({ id : Todos.length + 1 , title : addTodo , isDoing : false})
    console.log(Todos);

} else if ( menuTodo === 2 ){
    // deleted Todo
    var delTodo = prompt('Enter name for deleted todo')
    var findTodo = Todos.findIndex( function(item){
        return item.name === delTodo
    })

    Todos.splice( findTodo , 1)
    console.log(Todos);

} else if ( menuTodo === 3 ){
    // doing todo
    var changeTodo = prompt('Enter name for change todo')
    var switching = Todos.forEach( function (item){
        if( item.title === changeTodo){
            item.isDoing = true
        }
    })

    console.log(Todos);

}