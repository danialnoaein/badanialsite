import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={`rounded p-5 ${classes.card}`}>{props.children}</div>;
};

export default Card;
