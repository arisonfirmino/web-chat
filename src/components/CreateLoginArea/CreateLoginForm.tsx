import { FaAsterisk } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("O Email é obrigatório.")
    .email("Por favor, insira um email válido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "A senha precisa ter pelo menos 8 caracteres."),
  passwordConfirmation: yup
    .string()
    .required("A confirmação de senha é obrigatória.")
    .oneOf([yup.ref("password"), null!], "As senhas não conferem."),
});

const CreateLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center gap-3"
    >
      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 flex text-xl">
          Email
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
          className="rounded-full p-2.5 text-black outline-none md:p-5"
        />
        <p className="ml-2.5 mt-1 text-sm font-medium text-[#de362a] md:ml-5 md:text-base">
          {errors.email?.message}
        </p>
      </div>

      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 flex text-xl">
          Senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          className="rounded-full p-2.5 text-black outline-none md:p-5"
        />
        <p className="ml-2.5 mt-1 text-sm font-medium text-[#de362a] md:ml-5 md:text-base">
          {errors.password?.message}
        </p>
      </div>

      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 flex text-xl">
          Confirmação de senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha novamente"
          {...register("passwordConfirmation")}
          className="rounded-full p-2.5 text-black outline-none md:p-5"
        />
        <p className="ml-2.5 mt-1 text-sm font-medium text-[#de362a] md:ml-5 md:text-base">
          {errors.passwordConfirmation?.message}
        </p>
      </div>

      <button className="mb-20 mt-5 w-[300px] rounded-full border border-solid border-title-color p-2.5 text-xl md:mb-0 md:p-5 md:duration-[0.5s] md:hover:bg-title-color md:hover:text-text-color">
        Enviar
      </button>
    </form>
  );
};

export default CreateLoginForm;
