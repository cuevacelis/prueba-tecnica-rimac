import { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { UserContext } from "contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function LoginPage() {
  const contextUser = useContext(UserContext);
  let navigate = useNavigate();
  const codeKeyDownPlaque = useRef(null);

  const {
    register: registerLogin,
    reset: resetLogin,
    handleSubmit: handleSubmitLogin,
    watch: watchLogin,
    setError: setErrorLogin,
    clearErrors: clearErrorsLogin,
    setValue: setValueLogin,
    getValues: getValuesLogin,
    formState: { errors: errorsLogin },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    shouldUseNativeValidation: false,
  });

  const fetchDataForm = async (data) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const resp = await response.json();
    const res = { ...resp, ...data };
    contextUser.setData(res);
    navigate(`/plan`);
  };

  const normalizePlaque = (e) => {
    const placa = e.target.value.toUpperCase();
    const codeKeyPress = codeKeyDownPlaque.current;
    setValueLogin("plaque", placa);

    if (placa.length === 3 && codeKeyPress !== "Backspace") {
      setValueLogin("plaque", `${placa}-`);
    } else if (placa.length === 3 && codeKeyPress === "Backspace") {
      setValueLogin("plaque", `${placa.slice(0, 2)}`);
    }
  };

  return (
    <section className="flex flex-col md:flex-row md:justify-between">
      <Helmet>
        <title>Login | RIMAC SEGUROS</title>
      </Helmet>

      <div className="w-full flex flex-col items-center md:max-w-[535px]">
        <aside className="absolute top-0 left-0 w-full h-[308px] -z-10 bg-cover bg-[#f7f8fc] md:max-w-[535px] md:h-full md:bg-[url('./assets/pages/login/background_desktop_rimac.svg')]"></aside>
        <img
          className="hidden md:block w-80 h-[250px] mt-14"
          src="/recursos/pages/login/home_desktop_rimac.svg"
          alt="home rimac"
        />

        <section className="w-full flex flex-row justify-between md:justify-center">
          <div className="pl-8 pt-10 md:pl-0">
            <span className="text-[10px] font-bold leading-4 tracking-[0.8px] uppercase md:text-xs">
              ¡nuevo!
            </span>
            <h1 className="text-[28px] font-normal leading-9 tracking-[-0.6px] mt-2 mb-3 md:text-4xl">
              Seguro Vehicular <br />
              <span className="text-[#ef3340]">Tracking</span>
            </h1>
            <p className="font-['Roboto'] text-sm text-[#676F8F] font-normal leading-6 w-[183px] m-0 md:w-[288px]">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>
          </div>

          <div className="md:hidden">
            <img
              className="w-auto h-auto pt-8"
              src="/recursos/pages/login/home_mobile_rimac.svg"
              alt="home rimac"
            />
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col items-center">
        <section className="mx-8 max-w-[288px] md:mt-14">
          <h2 className="m-0 font-normal text-2xl leading-8 tracking-[-0.2px]">
            Déjanos tus datos
          </h2>

          <form className="login" onSubmit={handleSubmitLogin(fetchDataForm)}>
            <section className="login__inputs">
              <div className="login__inputs_element">
                <section
                  className={`container-selectinput ${
                    errorsLogin?.dni && "border border-red-500 rounded-md"
                  }`}
                >
                  <div className="input-field select">
                    <select className="customSelect" name="documentSelected">
                      <option>DNI</option>
                    </select>
                  </div>

                  <div className="input-custom">
                    <div className="input-field">
                      <input
                        autoComplete="false"
                        type="number"
                        placeholder="Nro. de doc"
                        {...registerLogin("dni", {
                          required: {
                            value: true,
                            message: "*Ingrese su documento de identidad.",
                          },
                          maxLength: {
                            value: 8,
                            message: "*Ingrese como máximo 8 caracteres.",
                          },
                          minLength: {
                            value: 8,
                            message: "*Ingrese 8 caracteres.",
                          },
                        })}
                      />
                    </div>
                  </div>
                </section>
                {errorsLogin?.dni && (
                  <p className="font-light text-red-500">
                    {errorsLogin.dni.message}
                  </p>
                )}
              </div>

              <section className="login__inputs_element">
                <div
                  className={`input-field ${
                    errorsLogin?.phone && "border border-red-500 rounded-md"
                  }`}
                >
                  <input
                    autoComplete="false"
                    type="number"
                    placeholder="Celular"
                    {...registerLogin("phone", {
                      required: {
                        value: true,
                        message: "*Ingrese su celular.",
                      },
                      maxLength: {
                        value: 9,
                        message: "*Ingrese como máximo 9 caracteres.",
                      },
                      minLength: {
                        value: 9,
                        message: "*Ingrese 9 caracteres.",
                      },
                    })}
                  />
                </div>
                {errorsLogin?.phone && (
                  <p className="font-light text-red-500">
                    {errorsLogin.phone.message}
                  </p>
                )}
              </section>

              <section className="login__inputs_element">
                <div
                  className={`input-field ${
                    errorsLogin?.plaque && "border border-red-500 rounded-md"
                  }`}
                >
                  <input
                    type="text"
                    maxLength="7"
                    autoComplete="off"
                    placeholder="Placa"
                    onKeyDown={(e) => (codeKeyDownPlaque.current = e.code)}
                    {...registerLogin("plaque", {
                      required: {
                        value: true,
                        message: "*Ingrese su número de placa.",
                      },
                      maxLength: {
                        value: 7,
                        message: "*Ingrese como máximo 6 caracteres.",
                      },
                      minLength: {
                        value: 7,
                        message: "*Ingrese 6 caracteres.",
                      },
                      onChange: normalizePlaque,
                    })}
                  />
                </div>
                {errorsLogin?.plaque && (
                  <p className="font-light text-red-500">
                    {errorsLogin.plaque.message}
                  </p>
                )}
              </section>
            </section>

            <section>
              <div className="login__checkbox">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  {...registerLogin("terms", {
                    required: {
                      value: true,
                      message: "*Acepte la política de privacidad.",
                    },
                  })}
                />
                <p>
                  Acepto la{" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.rimac.com/politica-privacidad"
                    rel="noreferrer"
                  >
                    Política de Protecciòn de Datos Personales
                  </a>{" "}
                  y los{" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.rimac.com/politica-privacidad"
                    rel="noreferrer"
                  >
                    Términos y Condiciones.
                  </a>
                </p>
              </div>

              <div>
                {errorsLogin?.terms && (
                  <p className="font-light text-red-500">
                    {errorsLogin.terms.message}
                  </p>
                )}
              </div>
            </section>

            <button type="submit" className="login_submit">
              cotízalo
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default LoginPage;
