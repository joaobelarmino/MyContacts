const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoryRepository.findById(id);

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.json({ error: 'Name is required.' });
    }

    const categories = await CategoryRepository.findAll();
    const hasName = categories.find((category) => category.name === name);

    if (hasName) {
      return response.json({ error: 'This name has already been taken' });
    }

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.json({ error: 'Category not found.' });
    }

    await CategoryRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
