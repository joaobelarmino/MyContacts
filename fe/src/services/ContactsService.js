import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listingContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?order=${orderBy}`);
  }
}

export default new ContactsService();
