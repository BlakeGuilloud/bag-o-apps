import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export function hashPassword(user) {
  user.password = bcrypt.hashSync(user.password, salt);
  return user;
}
