import React from 'react';

import {
  InputSearchContainer, Container, Header, ListContainer, Card,
} from './style';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
