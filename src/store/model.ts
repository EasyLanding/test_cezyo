import { Model, ORM } from 'redux-orm'

class Products extends Model {}
Products.modelName = 'Products'

class Category extends Model {}
Category.modelName = 'Category'

const orm = new ORM()
orm.register(Products, Category)

export { orm }
