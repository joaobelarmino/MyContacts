const db = require('../../database');

class CategoryRepository {
  async findAll() {
    const rows = await db.query('select * from categories order by name');

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('select * from categories where id = $1', [id]);

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
      insert into categories (name)
      values ($1)
      returning *
    `, [name]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      delete from categories where id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new CategoryRepository();
