import Input from "../Input/Input.component";
import { useState } from "react";

interface Object {
  name: string;
  phone: string;
  chavePix: string;
}

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [chavePix, setChavePix] = useState("");

  const nameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const phoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const chavePixInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChavePix(e.target.value);
  };

  const object: Object = {
    name: name,
    phone: phone,
    chavePix: chavePix,
  };

  console.log(object);

  return (
    <>
      <div>Formulário</div>
      <Input
        onChange={nameInputChange}
        type="text"
        placeholder="Digite seu nome"
        labelValue="Nome"
      />
      <Input
        onChange={phoneInputChange}
        type="tel"
        placeholder="Digite seu telefone"
        labelValue="Telefone"
      />
      <Input
        onChange={chavePixInputChange}
        type="text"
        placeholder="Digite sua chave pix"
        labelValue="Chave Pix"
      />
    </>
  );
}
