import "./Formulario.css";
import TextArea from "../TextArea";
import Times from "../Times";
import { useState } from "react";
import Botao from "../Botao";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const aoSalvar = (event) => {
    event.preventDefault();
    props.novoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    console.log(nome, cargo, imagem, time);
  };

  return (
    <form onSubmit={aoSalvar} className="formulario">
      <h2 className="formulario__titulo">
        Preencha os dados para criar o card do coloaborador.
      </h2>
      <TextArea
        obrigatorio={true}
        label="Nome"
        placeholder="Digite seu nome."
        valor={nome}
        aoAlterado={(valor) => setNome(valor)}
      />
      <TextArea
        obrigatorio={true}
        label="Cargo"
        placeholder="Digite seu cargo."
        valor={cargo}
        aoAlterado={(valor) => setCargo(valor)}
      />
      <TextArea
        obrigatorio={true}
        label="Imagem"
        placeholder="Informe a URL da imagem."
        valor={imagem}
        aoAlterado={(valor) => setImagem(valor)}
      />
      <Times
        obrigatorio={true}
        label="Time"
        itens={props.time}
        valor={time}
        aoAlterado={(valor) => setTime(valor)}
      />
      <Botao texto="Criar card" />
    </form>
  );
};

export default Formulario;
