import headers from '../service/header';
import http from 'http';
export default function handleError(res: http.ServerResponse, err: Error) {
  let message = '';

  if(err.message === ''){
    message = '欄位沒有正確，或沒有此 ID';
  }else{
    message = err.message;
  }

  res.writeHead(400, headers);
  res.end(
    JSON.stringify({
      status: 'fail',
      message,
    })
  );
}
