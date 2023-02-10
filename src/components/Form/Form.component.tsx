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

<<<<<<< HEAD
  const handlePost = () => {
    const url = "https://betplay-back-end.vercel.app/api";
=======
  const handlePost = async () => {
    const url = "https://betplay.onrender.com/api";
>>>>>>> fb546bdb145670fb13bc5524f4bc1bb4ff42ee0a
    if (!object.name || !object.phone || !object.chavePix)
      return alert("Preencha todos os campos");
    await Axios.post(url, object)
      .then((response) => {
        document.location.reload();
      })
      .catch((error) => {
        console.log(error.menssage);
      });
  };

  return (
    <div className="bg-white/25 m-2">
      <div className="w-full flex flex-col justify-evenly items-center">
        <div className=" h-16 flex flex-col justify-center items-center m-2 rounded-tl-2xl rounded-br-2xl">
          <div className="text-3xl text-center text-white font-black uppercase shadow-sm shadow-black border border-solid border-y-0 border-r-1 p-1 transition-all hover:scale-[101%]">
            <span className="text-white">Bet</span>
            <span className="text-green-900">Play</span>
            <span className="text-white lowercase">.com</span>
          </div>
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
          maxlength={11}
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
      </div>
    </div>
  );
}
