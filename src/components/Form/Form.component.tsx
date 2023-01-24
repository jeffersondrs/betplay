import Input from "../Input/Input.component";
import Axios from "axios";
import { useState } from "react";
import "../../App.css";

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
    Axios.post(url, object)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <form className="w-full flex flex-col justify-evenly items-center">
        <div className="backG w-96 h-16 flex flex-col justify-center items-center m-2 rounded-tl-2xl rounded-br-2xl">
          <h1 className="text-6xl text-center text-white font-black uppercase">
            Bet Aposta
          </h1>
        </div>
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
          className="bg-green-900 border-solid border  text-white w-32 h-10 rounded-md p-2 m-1 hover:bg-green-700 ease-in-out duration-300"
          onClick={handlePost}
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
}
