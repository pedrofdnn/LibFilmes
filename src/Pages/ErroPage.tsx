import img from "../Assets/erroPage.gif";
import NavbarComponet from "../Components/NavbarComponet";
export default function ErroPage() {
  return (
    <div>
      <NavbarComponet />
      <h1>Pagina não encontrada</h1>

      <p>
        <img src={img} alt="" />
      </p>
    </div>
  );
}
