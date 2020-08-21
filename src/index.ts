import * as express from 'express'
import {IWOPController} from './apps/iwop/controller'

const app: express.Application = express();
const port: number = 3000;

app.use('/iwop', IWOPController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
