import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`rounded bg-white p-5 ${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
