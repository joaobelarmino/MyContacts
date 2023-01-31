import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  InputSearchContainer, Container, Header, ListContainer, Card,
} from './style';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemoveContact = () => {
    setModalVisible(true);
  };
  return (
    <Container>
      {modalVisible && (
        <Modal title="Tem certeza que deseja remover o contato ”João Belarmino”?" danger content="Essa ação não poderá ser desfeita!" />
      )}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow of current sort" />
          </button>
        </header>

        <Card>
          <div className="contact">
            <div className="contact__heading">
              <strong>João Belarmino</strong>
              <small>Instagram</small>
            </div>
            <div className="contact__info">
              <span>joao.belarmino.silva01@gmail.com</span>
              <span>(11) 98478-1184</span>
            </div>
          </div>

          <div className="actions">
            <Link to="/edit/12">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={handleRemoveContact}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
