import {config} from 'dotenv'
import app from './app'

config();

const port = parseInt(process.env.APP_PORT || '3000', 10);
app.listen(port, () => 'Listening on port ' + port);
