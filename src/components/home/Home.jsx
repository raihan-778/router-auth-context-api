import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Home = () => {
  const userInfo = useContext(AuthContext);
  const { name } = userInfo;
  return (
    <div>
      <h1>Name:{name}</h1>
    </div>
  );
};

export default Home;
