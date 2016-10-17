import path       from 'path';
import { Model }  from 'objection';

function User() {
  Model.apply(this, arguments);
}

Model.extend(User);

User.tableName = 'Users';

User.jsonSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    username: { type: 'string' },
    password: { type: 'string' },
  },
};

export default User;