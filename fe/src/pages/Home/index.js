import React, { useEffect, useState } from 'react';

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
  const [contacts, setContacts] = useState([]);

  function handleRemoveContact() {
    setModalVisible(true);
  }

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {modalVisible && (
        <Modal title="Tem certeza que deseja remover o contato ”João Belarmino”?" danger content="Essa ação não poderá ser desfeita!" />
      )}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length}
          {contacts.lenght !== 1 ? ' contatos' : ' contato'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow of current sort" />
          </button>
        </header>
        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="contact">
              <div className="contact__heading">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <div className="contact__info">
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button" onClick={handleRemoveContact}>
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
