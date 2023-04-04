import "./Times.css";

const Times = (props) => {
  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value);
  };
  return (
    <div className="container">
      <label className="container__label">{props.label}</label>
      <select
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        className="container__input"
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Times;
