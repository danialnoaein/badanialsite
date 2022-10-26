import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`rounded bg-white p-4 my-4 max-[540px]:mx-4 ${classes.card} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
