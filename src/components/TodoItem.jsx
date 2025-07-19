function TodoItem({ task, tasks, setTasks }) {
    const toggleTodo = (id) => {
        //находим задачу с Id, равным переданному и меняем в текущем объекте задачи статус на противоположный
        //массив с полученными задачами перезаписываем в состояние tasks
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTodo = (id) => {
        //фильтруем в новый массив задачи, id которых не равен переданному
        //массив с полученными задачами перезаписываем в состояние tasks
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span
                className={task.completed ? "text-decoration-line-through" : ""}
            >
                {task.text}
            </span>
            <div>
                <button onClick={() => toggleTodo(task.id)} className="btn btn-outline-primary">
                    {task.completed ? "Отменить" : "Выполнить"}
                </button>
                <button onClick={() => deleteTodo(task.id)} className="btn btn-outline-danger ms-2">Удалить</button>
            </div>
        </li>
    );
}

export default TodoItem;
