import User from '../models/User.model';

export async function postUser(user) {
  let newUser;
  try {
    newUser = await User.query()
      .insertWithRelated(user);
  } catch (err) {
    return Promise.reject(err);
  }
  return Promise.resolve(newUser);
}

export async function getUsers() {
  let users;
  try {
    users = await User.query();
  } catch (err) {
    return Promise.reject(err);
  }
  if (!users) return Promise.reject('no users');
  return Promise.resolve(users);
}

export async function getUser(userId) {
  let user;
  try {
    user = await User.query()
      .findById(userId);
  } catch (err) {
    return Promise.reject(err);
  }
  if (!user) return Promise.reject('no user');
  return Promise.resolve(user);
}

export async function getUserByUsername(username) {
  let user;
  try {
    user = await User.query()
      .where('username', username)
      .first();
  } catch (err) {
    return Promise.reject(err);
  }
  if (!user) return Promise.reject('no user');
  return Promise.resolve(user);
}
