const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  /**
   * List all the data
   * @returns { JSON }
   */
  async index(request, response) {
    const { order } = request.query;
    const contacts = await ContactRepository.findAll(order);

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ errors: 'Contact not found!' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This email is already in use.' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;

    const {
      name, email, phone, category_id,
    } = request.body;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(400).json({ error: 'Contact not found.' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This email already exists.' });
    }

    const updatedContact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(updatedContact);
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ errors: 'Contact not found!' });
    }

    await ContactRepository.delete(id);

    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
