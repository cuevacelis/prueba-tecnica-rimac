import { createContext, useState } from "react";

export const UserContext = createContext({ data: 0, setData: () => {} });

function UserProvider(props) {
  const [data, setData] = useState({});

  return (
    <UserContext.Provider value={{ data, setData }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
