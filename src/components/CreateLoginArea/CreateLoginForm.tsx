import { FaAsterisk } from "react-icons/fa6";

const CreateLoginForm = () => {
  return (
    <form className="flex w-full flex-col items-center justify-center gap-3">
      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 flex text-xl">
          Email
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="text"
          placeholder="Digite seu email"
          className="rounded-full p-2.5 outline-none md:p-5"
        />
      </div>

      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 flex text-xl">
          Senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="rounded-full p-2.5 outline-none md:p-5"
        />
      </div>

      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 flex text-xl">
          Confirmação de senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha novamente"
          className="rounded-full p-2.5 outline-none md:p-5"
        />
      </div>

      <button className="mb-20 mt-5 w-[300px] rounded-full border border-solid border-title-color p-2.5 text-xl md:mb-0 md:p-5 md:duration-[0.5s] md:hover:bg-title-color md:hover:text-text-color">
        Enviar
      </button>
    </form>
  );
};

export default CreateLoginForm;
