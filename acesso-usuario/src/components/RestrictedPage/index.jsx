const RestrictedPage = ({ isLoggedIn, user, onClick }) => {
  return (
    <>
      <div>
        {" "}
        {isLoggedIn ? (
          <>
            <h2>Bem vindo {user} </h2>
            {/* <button onClick={onClick}>LOGOUT</button> */}
          </>
        ) : (
          <>
            <h2>Você não pode acessar essa página</h2>
            {/* <button onClick={onClick}>LOGIN</button> */}
          </>
        )}
      </div>
    </>
  );
};

export default RestrictedPage;
