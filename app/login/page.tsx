import Image from "next/image";
const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="flex h-full flex-col justify-center p-8 max-w-[500px] mx-auto ">
        <Image src="/logo.svg" width={173} height={39} alt="Finance APP" />
        <h1 className="text-4xl font-bold">Bem-vindo</h1>
        <p>
          A Finance.app é uma plataforma de gestão financeira que utiliza IA
          para monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
