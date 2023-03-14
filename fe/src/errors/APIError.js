export default class APIError extends Error {
  constructor(body, response) {
    super(body?.errors || `${response.status} - ${response.statusText}`);

    this.name = 'APIError';

    /**
     * Aqui podemos atribuir nosso response a uma propriedade comum, de forma que consigamos ter
     * acesso ao objeto response no nosso bloco catch, coisa que, no Error normal, não aconteceria.
     */
    this.response = response;
  }
}
