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
            Minha trajetória profissional começou no suporte técnico, onde atuei
            na manutenção de computadores, suporte remoto e administração de
            redes e servidores. Durante esse período, desenvolvi um profundo
            entendimento da lógica de processos, estrutura de dados e fluxo de
            sistemas, o que despertou meu interesse pelo desenvolvimento de
            software. Desde então, venho me especializando em tecnologias como
            HTML, CSS, JavaScript, TypeScript e React, buscando aplicar meus
            conhecimentos na construção de soluções eficientes e escaláveis. Meu
            objetivo é consolidar minha carreira como desenvolvedor Full Stack e
            contribuir com projetos que aliam inovação e qualidade técnica.
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
