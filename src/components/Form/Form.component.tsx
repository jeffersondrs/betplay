import Input from "../Input/Input.component";

export default function Form() {
  return (
    <>
      <div>Formulário</div>
      <Input type="text" placeholder="Digite seu nome" labelValue="Nome" />
      <Input type='tel' placeholder='Digite seu telefone' labelValue='Telefone' />
    </>
  );
}
