import "./TextArea.css";

const TextArea = (props) => {
  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor={props.label} className="container__label">
        {props.label}
      </label>
      <input
        className="container__input"
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        type="text"
        id={props.label}
        placeholder={`${props.placeholder}...`}
      />
    </div>
  );
};
export default TextArea;
