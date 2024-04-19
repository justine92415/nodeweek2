
import http from 'http';
import headers from '../service/header';

export default function handleSuccess(res: http.ServerResponse, data:any) {
  res.writeHead(200, headers);
  res.end(
    JSON.stringify({
      status: 'success',
      data,
    })
  );
}
