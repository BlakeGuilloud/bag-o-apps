import * as userService from '../db/services/User.service';

export function login(req, res) {
  Promise.resolve()
    .then(() => userService.getUser(req.user.userId))
    .then((user) => res.status(200).json(user))
    .catch((err) => console.log(err));
}

export function logout(req, res) {
  Promise.resolve()
    .then(() => req.logout())
    .then(res.status(200))
    .catch((err) => console.log(err));
}

export function getCurrentUser(req, res) {
  Promise.resolve()
    .then(() => userService.getUser(req.user.userId))
    .then((user) => res.status(200).json(user))
    .catch((err) => console.log(err));
}
