import Input from "../Input/Input.component";
import axios from "axios";
import { useState } from "react";

type objeto = {
  name: string;
  phone: string;
  chavePix: string;
};

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

  const object: objeto = {
    name: name,
    phone: phone,
    chavePix: chavePix,
  };

  const handlePost = () => {
    const url = "https://betplay.onrender.com/api";
    axios
      .post(url, object)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <button
        className="bg-blue-900 text-white w-32 h-10 rounded-md p-2 m-1 hover:bg-blue-700"
        onClick={handlePost}
        type="submit"
      >
        Post
      </button>
    </>
  );
}
