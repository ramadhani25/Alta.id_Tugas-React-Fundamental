import style from "./CardList.module.css";

const CardList = ({ todo }) => {
  return (
    <div className={style.card}>
      <p className={todo.completed ? style.completed : null}>{todo.title}</p>
    </div>
  );
};

export default CardList;
