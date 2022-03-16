import TodoPage from "./Pages/Todo/TodoPage";
import { mockData } from "./mockData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoPage todos={mockData} />
    </div>
  );
}

export default App;
