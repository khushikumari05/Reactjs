// import  { useState } from "react";

// const Todo = () => {
//   const [todos, setTodos] = useState([]); 
//   const [task, setTask] = useState(""); 

//   // Add a new todo
//   const addTodo = () => {
//     if (task.trim() === "") return; // Prevent empty tasks
//     setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
//     setTask(""); // Clear input field after adding
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Delete a todo
//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
//       <h1>Todo App</h1>
//       <div>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter a task"
//           style={{
//             padding: "8px",
//             width: "70%",
//             marginBottom: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//           }}
//         />
//         <button
//           onClick={addTodo}
//           style={{
//             padding: "8px",
//             marginLeft: "5px",
//             backgroundColor: "green",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Add
//         </button>
//       </div>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               textDecoration: todo.completed ? "line-through" : "none",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               backgroundColor: "#f8f9fa",
//               padding: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             <span
//               onClick={() => toggleComplete(todo.id)}
//               style={{
//                 cursor: "pointer",
//                 flexGrow: 1,
//                 textAlign: "left",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               style={{
//                 marginLeft: "10px",
//                 padding: "5px",
//                 background: "red",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default Todo;

import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]); // State for todo list
  const [task, setTask] = useState(""); // State for input field

  // Add a new todo
  const addTodo = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear input field after adding
  };

  // Toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
