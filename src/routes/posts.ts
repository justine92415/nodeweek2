import http from 'http';
import { Method } from '../type';
import https from '../controllers/http';
import posts from '../controllers/posts';

const routes = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  if (req.url === '/posts' && req.method === Method.GET) {
    posts.getPosts(req, res);
  } else if (req.url === '/posts' && req.method === Method.POST) {
    req.on('end', async () => posts.createPost(req, res, body));
  } else if (req.url === '/posts' && req.method === Method.DELETE){
    posts.deleteAllPosts(req, res);
  } else if (req.url?.startsWith('/posts/') && req.method === Method.DELETE) {
    posts.deletePost(req, res);
  } else if (req.url?.startsWith('/posts/') && req.method === Method.PATCH) {
    req.on('end', async () => posts.updatePost(req, res, body));
  }
  else if (req.method === Method.OPTIONS) {
    https.cors(res);
  } else {
    https.notFound(res);
  }
};

export default routes;
