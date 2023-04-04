import Card from "../Cards";
import "./Escolas.css";

const Escola = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section className="escola" style={{ background: props.corSecundaria }}>
        <h3 className="titulo" style={{ borderColor: props.corPrimaria }}>
          {props.nome}
        </h3>
        <div className="card__container">
          {props.colaboradores.map((colaborador) => (
            <Card
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              img={colaborador.imagem}
              cor={props.corPrimaria}
              key={colaborador.nome}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Escola;
/*
<div className="card__container">
        <Card cor={props.corPrimaria} />
        <Card cor={props.corPrimaria} />
        <Card cor={props.corPrimaria} />
        <Card cor={props.corPrimaria} />
      </div>

*/
