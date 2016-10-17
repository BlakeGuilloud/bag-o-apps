// ------------------------------
// Import Dependencies
// ------------------------------
import express    from 'express';
import bodyParser from 'body-parser';
import { Model }  from 'objection';
import cors       from 'cors';
import path       from 'path';
import passport   from 'passport';
import session    from 'express-session';


// ------------------------------
// Import Routers
// ------------------------------
import authRouter  from './routers/Auth.router';
import userRouter  from './routers/User.router';

// ------------------------------
// Establish Knex Connection
// ------------------------------
import knex       from 'knex';
import knexConfig from './db/knexfile.js';

const connection = knex(knexConfig);
Model.knex(connection);

// ------------------------------
// Configure Express
// ------------------------------
const app = express();

app.set('appPath', path.join('', 'client'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(`${app.get('appPath')}/build`));

app.use(session({ secret: 'yea' }));
app.use(passport.initialize());
app.use(passport.session());

// ------------------------------
// Configure Routes
// ------------------------------
app.use('/api/users', userRouter);
app.use('/auth', authRouter);

// We want any routes that are not prefaced with api to be sent to client.
app.route('/*').get((req, res) => res.sendFile(path.resolve(`${app.get('appPath')}/index.html`)));

// ------------------------------
// Initialize Server
// ------------------------------
const port = process.env.PORT || 8080;
app.listen(port);
