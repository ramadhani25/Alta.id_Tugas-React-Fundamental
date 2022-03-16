import CardList from "./components/CardList";
import Header from "./components/Header";

const TodoPage = ({ todos }) => {
  return (
    <div>
      <Header text="To Do App" />
      <div style={{ display: "inline-block" }}>
        {todos.map((item) => {
          return <CardList key={item.id} todo={item} />;
        })}
      </div>
    </div>
  );
};

export default TodoPage;
