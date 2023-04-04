import "./Escolas.css";

const Escola = (props) => {
  return (
    <section className="escola" style={{ background: props.corSecundaria }}>
      <h3 className="titulo" style={{ borderColor: props.corPrimaria }}>
        {props.nome}
      </h3>
    </section>
  );
};

export default Escola;
