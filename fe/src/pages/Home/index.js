/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';

import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';
import {
  InputSearchContainer,
  Container,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './style';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';
import Modal from '../../components/Modal';
import ContactsService from '../../services/ContactsService';
import { Button } from '../../components/LayoutUtils';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [orderList, setOrderList] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadingContacts = useCallback(async () => {
    setIsLoading(true);
    try {
      const contactsList = await ContactsService.listingContacts(orderList);
      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderList]);

  useEffect(() => {
    loadingContacts();
  }, [loadingContacts]);

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

  function handleTryAgain() {
    loadingContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      {modalVisible && (
        <Modal title="Tem certeza que deseja remover o contato ”João Belarmino”?" danger content="Essa ação não poderá ser desfeita!" />
      )}

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input type="text" value={searchTerm} placeholder="Pesquisar contato..." onChange={handleSearchContact} />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.lenght !== 1 ? ' contatos' : ' contato'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad face" />
          <div className="error-details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box representing no data found." />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                {' '}
                <strong>”Novo contato”</strong>
                {' '}
                à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier question" />
              <span>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.
              </span>
            </SearchNotFoundContainer>
          )}

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
        </>
      )}
    </Container>
  );
}
