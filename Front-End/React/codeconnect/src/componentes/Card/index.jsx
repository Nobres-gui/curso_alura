import Chat from "./assets/chat.svg";
import Code from "./assets/code.svg";
import Comprtilhar from "./assets/share.svg";
import "./style.css";

export default function Card({
  id,
  imgUrl,
  titulo,
  resumo,
  linhasCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imgUrl} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="Códigos" />
              {linhasCodigo}
            </li>
            <li>
              <img src={Comprtilhar} alt="Compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="Comentários" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}
