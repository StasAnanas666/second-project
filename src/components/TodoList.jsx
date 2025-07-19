import TodoItem from "./TodoItem";

function TodoList({tasks, setTasks}) {
    return (
        <ul className="list-group my-4">
            {
                tasks.map(task => (
                    <TodoItem task={task} setTasks={setTasks} tasks={tasks} />
                ))
            }
        </ul>
    )
}

export default TodoList;
