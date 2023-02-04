import React, { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
import {
  InputSearchContainer, Container, Header, ListHeader, Card,
} from './style';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [orderList, setOrderList] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?order=${orderList}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => new Error(error));
  }, [orderList]);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  function handleSearchContact(event) {
    setSearchTerm(event.target.value);
  }

  function handleToggleOrderList() {
    setOrderList((prevState) => (prevState === 'desc' ? 'asc' : 'desc'));
  }

  function handleRemoveContact() {
    setModalVisible(true);
  }

  return (
    <Container>
      {modalVisible && (
        <Modal title="Tem certeza que deseja remover o contato ”João Belarmino”?" danger content="Essa ação não poderá ser desfeita!" />
      )}
      <InputSearchContainer>
        <input type="text" value={searchTerm} placeholder="Pesquisar contato..." onChange={handleSearchContact} />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.lenght !== 1 ? ' contatos' : ' contato'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      {filteredContacts.length > 1 && (
        <ListHeader orderList={orderList}>
          <button type="button" className="sort-button" onClick={handleToggleOrderList}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow of current sort" />
          </button>
        </ListHeader>
      )}
      {filteredContacts.map((contact) => (
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
    </Container>
  );
}
