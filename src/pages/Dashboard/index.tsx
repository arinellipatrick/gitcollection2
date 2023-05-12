import { Title, Form } from "./styles";

import logo from "../../assets/logo.svg";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de Repositórios do GitHub</Title>
      <Form>
        <input placeholder="username/repository_name"></input>
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
};
