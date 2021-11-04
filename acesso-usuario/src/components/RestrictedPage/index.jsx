const RestrictedPage = ({ isLoggedIn, user, Login }) => {
  console.log(isLoggedIn);
  return (
    <div>
      <h2>
        {!isLoggedIn
          ? `Bem vindo ${user}`
          : "Você não pode acessar esta página"}{" "}
      </h2>
      <button onClick={Login}>{!isLoggedIn ? "LOGOUT" : "LOGIN"}</button>
    </div>
  );
};

export default RestrictedPage;
