import * as http from 'http';
import routes from './routes/posts';


require('./connections')


export const app: http.RequestListener = async (req, res) => {
  routes(req, res);
};


export default app;