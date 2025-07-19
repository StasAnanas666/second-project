import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    //массив задач, по умолчанию пустой массив
    //это глобальное состояние, которое будет использоваться дргими компонентами
    const [tasks, setTasks] = useState([]);

    return (
        <div className="container my-3">
            <TodoForm setTasks={setTasks} tasks={tasks} />
            <TodoList setTasks={setTasks} tasks={tasks} />
        </div>
    );
}

export default App;
