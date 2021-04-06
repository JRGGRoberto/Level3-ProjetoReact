import React from 'react';
import  { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/7244140?v=4" alt="Roberto Góes"/>
          <div>
            <strong>jrggroberto/repo</strong>
            <p>Good way</p>
          </div>
          <FiChevronRight size={20} />
        </a>


        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/7244140?v=4" alt="Roberto Góes"/>
          <div>
            <strong>jrggroberto/repo</strong>
            <p>Good way</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/7244140?v=4" alt="Roberto Góes"/>
          <div>
            <strong>jrggroberto/repo</strong>
            <p>Good way</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;