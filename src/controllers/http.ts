import { ServerResponse } from 'http';
import headers from '../service/header';

const http = {
  cors(res: ServerResponse){
    res.writeHead(200);
    res.end();
  },
  notFound(res: ServerResponse){
    res.writeHead(404,headers);
    res.write(JSON.stringify({
      "statuse":"false",
      "message":"無此網站路由"
    }))
    res.end();
  }
}

export default http