import "./button.css";

export function Button(props) {
  const { type, size, text, clickHandler } = props;

  return (
    <button
      class={`btn btn-${type ? type : "primary"} btn-${size ? size : "md"}`}
      onClick={clickHandler}
    >
      {text ? text : "I am button"}
    </button>
  );
}
