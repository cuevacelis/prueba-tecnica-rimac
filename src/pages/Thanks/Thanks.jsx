function ThanksPage(params) {
  return (
    <section className="flex flex-col md:flex-row md:[height:calc(100vh_-_56px)]">
      <div className="flex flex-row w-full h-auto md:bg-[#f7f8fc] md:max-w-[408px] md:h-full">
        <img
          className="w-full md:hidden"
          src="/recursos/pages/thanks/agradecimiento_mobile_rimac.svg"
          alt="welcome rimac"
        ></img>

        <img
          className="hidden w-full md:block md:items-center md:relative md:left-14"
          src="/recursos/pages/thanks/agradecimiento_desktop_rimac.svg"
          alt="welcome rimac"
        ></img>
      </div>

      <div className="mx-8 my-20 md:flex md:flex-col md:justify-center md:ml-[224px] md:max-w-[480px]">
        <h1 className="text-[28px] md:text-4xl font-normal leading-9 tracking-[-0.6px]">
          <span className="text-red-500">¡Te damos la bienvenida!</span> <br />{" "}
          Cuenta con nosotros para proteger tu vehículo
        </h1>
        <p className="mt-6 font-['Roboto'] font-light text-base leading-7 text-[#676F8F]">
          Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
          tu correo:
        </p>
        <p className="pt-2">joel.sanchez@gmail.com</p>
        <div className="flex flex-row justify-center md:justify-start">
          <button className="uppercase py-[20px] px-10 text-white bg-[#EF3340] rounded-lg mt-10">
            cómo usar mi seguro
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThanksPage;
