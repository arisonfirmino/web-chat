const LoginForm = () => {
  return (
    <form className="flex w-full flex-col items-center justify-center gap-6">
      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 text-xl">Nome de usuário ou email</label>
        <input
          type="text"
          placeholder="Digite seu nome de usuário ou email"
          className="rounded-full p-5 outline-none"
        />
      </div>

      <div className="flex w-full flex-col">
        <label className="mb-1 ml-5 text-xl">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="rounded-full p-5 outline-none"
        />
      </div>

      <button className="my-5 w-[300px] rounded-full border border-solid border-title-color p-2.5 text-xl md:p-5 md:duration-[0.5s] md:hover:bg-title-color md:hover:text-text-color">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
