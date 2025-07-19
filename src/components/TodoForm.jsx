import { useState } from "react";

function TodoForm({ tasks, setTasks }) {
    //состояние будет привязано к полю ввода и будет меняться при изменении значения в поле ввода
    const [text, setText] = useState(""); //задача из поля ввода

    const handleSubmit = (e) => {
        e.preventDefault();
        //к актуальным данным массива tasks добавляем новый объект
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
        setText(""); //очистка формы
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите задачу..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="btn btn-outline-success ms-3" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    );
}

export default TodoForm;
