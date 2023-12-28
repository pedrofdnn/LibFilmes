import ContainerContact from "../Styles/StyleContac";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div>
      <h1>Contato</h1>

      <ContainerContact>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/85568352?v=4"
            alt="Imagem de Apresentação"
          />
        </div>

        <div>
          <h1>Olá me chamo Pedro Fernandes.</h1>

          <p>
            Sou formado pelo bootcamp da Labenu e atualmente estou aprimorando
            meus conhecimentos na faculdade, onde curso Ciências da Computação.
            <br />
            Tenho 10 anos de experiência com suporte técnico, onde realizava
            suporte direto ao usuário presencialmente e remotamente. Hoje estou
            em transição de carreira para ser um desenvolvedor e estou buscando
            oportunidade na nova área com o objetivo de poder participar de
            soluções que possam impactar na qualidade de vida das pessoas,
            tornando tarefas e obrigações mais simples.
          </p>

          <article>
            <a href="https://www.linkedin.com/in/pedrofdnn/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/pedrofdnn" target="_blank">
              <FaGithubSquare />
            </a>
          </article>
        </div>
      </ContainerContact>
    </div>
  );
}
