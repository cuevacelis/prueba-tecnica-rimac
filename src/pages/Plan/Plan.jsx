import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "contexts/UserContext";
import Switch from "components/switch/Switch";
import { ReactComponent as ArrowLeft } from "assets/pages/plan/arrow_left.svg";
import { ReactComponent as ArrowUp } from "assets/pages/plan/arrow_up.svg";
import { ReactComponent as ArrowDown } from "assets/pages/plan/arrow_down.svg";
import { ReactComponent as IconOne } from "assets/pages/plan/one.svg";
import { ReactComponent as IconTwo } from "assets/pages/plan/two.svg";
import { ReactComponent as IconAdd } from "assets/pages/plan/add.svg";
import { ReactComponent as IconSubstract } from "assets/pages/plan/substract.svg";

function PlanPage() {
  const contextUser = useContext(UserContext);
  const navigate = useNavigate();
  const [sumAssured, setSumAssured] = useState(14300);
  const [totalAmount, setTotalAmount] = useState(35);
  const refSwitchLlanta = useRef(true);
  const refSwitchChoque = useRef(false);
  const refSwitchAtropello = useRef(false);

  const formatNumberToDollar = (number, fractionsDigits) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionsDigits,
    }).format(number);
  };

  const changeSumAssured = (typeFunc) => {
    const actionsSumAssured = {};

    actionsSumAssured.add = function () {
      if (sumAssured < 16500) {
        setSumAssured(sumAssured + 100);
        if (sumAssured >= 16000 && refSwitchChoque.current) {
          setTotalAmount(totalAmount - 20);
          refSwitchChoque.current = false;
        }
      }
    };

    actionsSumAssured.substract = function () {
      if (sumAssured > 12500) {
        setSumAssured(sumAssured - 100);
      }
    };

    return actionsSumAssured[typeFunc]();
  };

  const changeTotalAmount = (typeFunc, e) => {
    const actionsTotalAmount = {};

    actionsTotalAmount.actionLLantaRobada = function () {
      if (e.target.checked) {
        refSwitchLlanta.current = true;
        setTotalAmount(totalAmount + 15);
      } else {
        refSwitchLlanta.current = false;
        setTotalAmount(totalAmount - 15);
      }
    };

    actionsTotalAmount.actionChoque = function () {
      if (e.target.checked) {
        refSwitchChoque.current = true;
        setTotalAmount(totalAmount + 20);
      } else {
        refSwitchChoque.current = false;
        setTotalAmount(totalAmount - 20);
      }
    };

    actionsTotalAmount.actionAtropello = function () {
      if (e.target.checked) {
        refSwitchAtropello.current = true;
        setTotalAmount(totalAmount + 50);
      } else {
        refSwitchAtropello.current = true;
        setTotalAmount(totalAmount - 50);
      }
    };

    return actionsTotalAmount[typeFunc]();
  };

  const onSubmit = () => {
    const newDataUserContext = {
      ...contextUser.data,
      monto: totalAmount,
    };
    contextUser.setData(newDataUserContext);
    navigate(`/thanks`);
  };

  return (
    <section className="flex flex-col md:flex-row">
      <Helmet>
        <title>Plan | RIMAC SEGUROS</title>
      </Helmet>

      <section className="md:bg-[#F7F8FC]">
        <div className="flex flex-row py-3 px-8 items-center justify-center gap-3 md:hidden">
          <NavLink to="/">
            <ArrowLeft />
          </NavLink>
          <p className="text-[10px] leading-4 uppercase">paso 2 de 2</p>
          <span className="w-[176px] h-[6px] bg-[#6769FF] rounded-3xl"></span>
        </div>

        <div className="hidden w-[408px] md:flex flex-col gap-12 pt-[52px] px-16">
          <p className="flex flex-row gap-4">
            <IconOne />
            <span className="text-[#A3ABCC]">Datos</span>
          </p>

          <p className="flex flex-row gap-4">
            <IconTwo />
            <span className="text-[#494F66]">Arma tu plan</span>
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <div className="md:max-w-[576px] md:px-24">
          <section className="px-8 md:px-0 flex flex-col bg-[#F7F8FC] md:bg-white">
            <div className="mt-10">
              <h1 className="text-[28px] leading-9 tracking-[-0.6px]">
                <span className="hidden md:block">
                  ¡Hola,{" "}
                  <span className="text-red-500">
                    {`${
                      contextUser?.data?.name &&
                      contextUser?.data?.name.split(" ")[0]
                    } `}
                    !
                  </span>
                </span>
                <span className="md:hidden">Mira las coberturas</span>
              </h1>
              <p className="mt-2 font-['Roboto'] text-base leading-7 text-[#676F8F]">
                Conoce las coberturas para tu plan
              </p>
            </div>

            <div className="bg-white flex flex-row justify-between mb-14  rounded-xl md:[border:_3px_solid_#F0F2FA]">
              <div className="pt-11 pl-6 pb-9">
                <span className="font-['Roboto'] text-xs leading-5 tracking-[0.2px] text-[#A3ABCC]">
                  {`Placa: ${contextUser?.data?.plaque} `}
                </span>
                <h2 className="text-base leading-6 tracking-[0.2px] text-[#494F66]">
                  Wolkswagen 2019 <br /> Golf
                </h2>
              </div>
              <img
                src="/recursos/pages/plan/arma_tu_plan_rimac.svg"
                alt="plan rimac"
              ></img>
            </div>
          </section>

          <section className="px-8 md:px-0 flex flex-col md:flex-row md:justify-between">
            <div className="mt-11 md:mt-0">
              <h3 className="text-base leading-6 tracking-[0.2px] text-[#494F66]">
                Indica la suma asegurada
              </h3>
              <span className="text-xs leading-4 tracking-[0.6px] uppercase text-[#676F8F]">
                MIN $12.500 | MAX $16,500
              </span>
            </div>

            <div className="rounded-lg min-w-[160px] h-14 flex flex-row justify-between items-center px-[19px] mt-4 md:mt-0 bg-white border border-solid border-[#C5CBE0] box-border">
              <span
                className="h-full flex flex-row items-center cursor-pointer"
                onClick={() => changeSumAssured("substract")}
              >
                <IconSubstract />
              </span>
              <span className="text-base leading-6 text-[#494F66] py-4">
                {formatNumberToDollar(sumAssured, 0)}
              </span>
              <span
                className="h-full flex flex-row items-center cursor-pointer"
                onClick={() => changeSumAssured("add")}
              >
                <IconAdd />
              </span>
            </div>
          </section>

          <section className="px-8 md:px-0">
            <h2 className="mt-9 mb-10">Agrega o quita coberturas</h2>

            <ul className="flex flex-row items-center">
              <li className="text-center w-1/3 text-[10px] leading-4 tracking-[0.8px] text-[#EF3340] uppercase border-b-2 pb-6 border-red-500 cursor-pointer">
                PROTEGE A <br /> TU AUTO
              </li>
              <li className="text-center w-1/3 text-[10px] leading-4 tracking-[0.8px] text-[#494F66] uppercase border-b-2 pb-6 cursor-pointer">
                PROTEGE A LOS
                <br /> QUE TE RODEAN
              </li>
              <li className="text-center w-1/3 text-[10px] leading-4 tracking-[0.8px] text-[#494F66] uppercase border-b-2 pb-6 cursor-pointer">
                MEJORA TU
                <br /> PLAN
              </li>
            </ul>

            <section className=" pt-9 pb-2 border-b">
              <div className="flex flex-row gap-5">
                <img
                  src="/recursos/pages/plan/llanta_robada_rimac.svg"
                  alt="llanta robada rimac"
                ></img>
                <div className="flex flex-row flex-1 justify-between">
                  <p>Llanta robada</p>
                  <Switch
                    shadow
                    color="success"
                    checked={refSwitchLlanta.current}
                    onChange={(e) => changeTotalAmount("actionLLantaRobada", e)}
                  />
                </div>
              </div>
              <div className="pl-16 mb-4">
                <p className="text-sm leading-6 text-[#676F8F]">
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis
                </p>
              </div>
              <div className="pl-16 flex flex-row items-center gap-3 md:hidden">
                <p className="text-[10px] leading-4 tracking-[0.8px] uppercase text-[#A3ABCC]">
                  Ver menos
                </p>
                <ArrowUp />
              </div>
            </section>

            {sumAssured <= 16000 && (
              <section className=" pt-9  pb-2 border-b">
                <div className="flex flex-row gap-5">
                  <img
                    src="/recursos/pages/plan/icon_choque_rimac.svg"
                    alt="choque rimac"
                  ></img>
                  <div className="flex flex-row flex-1 justify-between">
                    <p> Choque y/o pasarte la luz roja </p>
                    <Switch
                      shadow
                      color="success"
                      checked={refSwitchChoque.current}
                      onChange={(e) => changeTotalAmount("actionChoque", e)}
                    />
                  </div>
                </div>
                <div className="pl-16 mb-4">
                  <p className="text-sm leading-6 text-[#676F8F]"></p>
                </div>
                <div className="pl-16 flex flex-row items-center gap-3 md:hidden">
                  <p className="text-[10px] leading-4 tracking-[0.8px] uppercase text-[#A3ABCC]">
                    Ver más
                  </p>
                  <ArrowDown />
                </div>
              </section>
            )}

            <section className=" pt-9  pb-2 border-b">
              <div className="flex flex-row gap-5">
                <img
                  src="/recursos/pages/plan/icon_atropello_rimac.svg"
                  alt="atropello rimac"
                ></img>
                <div className="flex flex-row flex-1 justify-between">
                  <p> Atropello en la vía Evitamiento </p>

                  <Switch
                    shadow
                    color="success"
                    checked={refSwitchAtropello.current}
                    onChange={(e) => changeTotalAmount("actionAtropello", e)}
                  />
                </div>
              </div>
              <div className="pl-16 mb-4">
                <p className="text-sm leading-6 text-[#676F8F]"></p>
              </div>
              <div className="pl-16 flex flex-row items-center gap-3 md:hidden">
                <p className="text-[10px] leading-4 tracking-[0.8px] uppercase text-[#A3ABCC]">
                  Ver más
                </p>
                <ArrowDown />
              </div>
            </section>
          </section>
        </div>

        <div>
          <section className="mt-28 mb-4 mx-8 flex flex-row md:flex-col justify-between bg-white">
            <div className="flex flex-col md:pb-5 md:border-b md:border-[#E4E8F7]">
              <h3 className="hidden text-xs leading-4 tracking-[0.6px] font-bold md:block uppercase">
                monto
              </h3>
              <p className="text-[28px]">
                {formatNumberToDollar(totalAmount, 2)}
              </p>
              <span className="uppercase md:lowercase text-[#676F8F]">
                mensuales
              </span>
            </div>

            <div className="hidden md:block mt-6 mb-8">
              <p className="text-base leading-6 text-[#494F66] mb-3">
                El precio incluye:
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-[#43B748]">✓ </span>Llanta de respuesto
                </li>
                <li>
                  <span className="text-[#43B748]">✓ </span>Analisis de motor
                </li>
                <li>
                  <span className="text-[#43B748]">✓ </span>Aros gratis
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={onSubmit}
                className="bg-[#EF3340] md:w-full rounded-md py-[14px] px-4 uppercase text-white"
              >
                lo quiero
              </button>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default PlanPage;
