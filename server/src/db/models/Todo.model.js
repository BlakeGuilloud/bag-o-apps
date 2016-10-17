import path       from 'path';
import { Model }  from 'objection';

function Todo() {
  Model.apply(this, arguments);
}

Model.extend(Todo);

Todo.tableName = 'Todos';

Todo.jsonSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: { type: 'string' },
    userId: {
      type: 'integer',
      default: 1
    },
    completed: {
      type: 'boolean',
      default: false
    },
  },
};

Todo.relationMappings = {
  user: {
    relation: Model.BelongsToOneRelation,
    modelClass: path.join(__dirname, 'User.model'),
    join: {
      from: 'Todos.userId',
      to: 'Users.id',
    },
  },
};

export default Todo;
