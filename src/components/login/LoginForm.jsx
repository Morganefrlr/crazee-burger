import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    navigate(`/order/${name}`);
  };

  return (
    <>
      <h1>Bienvenue chez nous!</h1>
      <h3>Connectez-vous</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
};

export default LoginForm;
