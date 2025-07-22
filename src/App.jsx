import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    //массив задач, по умолчанию пустой массив
    //это глобальное состояние, которое будет использоваться другими компонентами
    const [tasks, setTasks] = useState(() => {
        //загружаем задачи из localStorage
        const savedTasks = localStorage.getItem("tasks");
        //если данные в LocalStorage есть, иначе - пустой массив
        return savedTasks ? JSON.parse(savedTasks) : []
    });

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
    }, [])

    //вызывается при изменении состояния tasks
    useEffect(() => {
        console.log("Сработал useEffect");
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    return (
        <div className="container my-3">
            <TodoForm setTasks={setTasks} tasks={tasks} />
            <TodoList setTasks={setTasks} tasks={tasks} />
        </div>
    );
}

export default App;
