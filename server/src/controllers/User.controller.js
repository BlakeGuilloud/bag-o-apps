import * as userService from '../db/services/User.service';
import * as authHelpers from '../helpers/Auth.helpers';

export function postUser(req, res) {
  Promise.resolve()
    .then(() => authHelpers.hashPassword(req.body))
    .then(userService.postUser)
    .then((user) => res.status(200).json(user))
}

export function getUsers(req, res) {
  Promise.resolve()
    .then(() => userService.getUsers())
    .then((users) => res.status(200).json(users))
}
