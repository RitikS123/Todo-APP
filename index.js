let todo = [];

let req = prompt("Enter the action you want to perform: ");

while(true)
{
    if(req=='quit')
    {
        console.log("OK, YOU QUIT THE APP!");
        break;
    }
    else if(req=='add')
    {
        let newTodo = prompt("Enter task you want to add: ");
        todo.push(newTodo);
        console.log("Task added successfully!");
    }
    else if(req=='list')
    {
        console.log("**********");
        for(let i=0;i<=todo.length-1;i++)
        {
            console.log(i , todo[i]);
        }
        console.log("**********");
        console.log("Task listed successfully!");
    }

    else if(req=='delete')
    {
        let idx = prompt("Enter the index of the task you want to delete: ");
        todo.splice(idx,1);
        console.log("Task deleted successfully!");
    }
    else
    {
        console.log("Invalid action!")
    }

    req = prompt("Enter the action you want to perform: ");
}
