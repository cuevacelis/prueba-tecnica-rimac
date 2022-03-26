import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-14 px-8 md:px-[120px]">
      <NavLink to={"/"}>
        <img
          className="w-[92px] h-4"
          src="/recursos/navbar/logo_rimac.svg"
          alt="logo rimac"
        />
      </NavLink>

      <div className="flex flex-row gap-[23px]">
        <span className="hidden md:block">¿Tienes alguna duda?</span>

        <a
          href="tel: (01) 411 6001"
          className="flex flex-row gap-[8.8px]  flex-nowrap"
        >
          <img src="/recursos/navbar/icon_phone_rimac.svg" alt="telf rimac" />
          <p className="md:hidden text-sm font-normal text-[#6769FF] m-0">
            Llámanos
          </p>
          <p className="hidden md:block text-sm font-normal text-[#6769FF] m-0 w-[88px]">
            (01) 411 6001
          </p>
        </a>
      </div>
    </header>
  );
}

export default Header;
