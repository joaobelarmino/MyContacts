const db = require('../../database');

class ContactRepository {
  async findAll(order = 'asc') {
    const direction = order.toLowerCase() === 'desc' ? 'desc' : 'asc';
    const rows = await db.query(`
      select con.*, cat.name as category_name
      from contacts con
      left join categories cat on con.category_id = cat.id
      order by con.name, cat.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      select con.*, cat.name as category_name
      from contacts con
      left join categories cat on con.category_id = cat.id
      where con.id = $1;
    `, [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('select * from contacts where email = $1', [email]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      delete from contacts where id = $1
    `, [id]);

    return deleteOp;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      insert into contacts(name, email, phone, category_id)
      values($1, $2, $3, $4)
      returning *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const currentContact = await this.findById(id);

    const [row] = await db.query(`
      update contacts set name = $1, email = $2, phone = $3, category_id = $4 where id = $5
      returning *
    `, [
      name || currentContact.name,
      email || currentContact.email,
      phone || currentContact.phone,
      category_id || currentContact.category_id,
      id,
    ]);

    return row;
  }
}

module.exports = new ContactRepository();
