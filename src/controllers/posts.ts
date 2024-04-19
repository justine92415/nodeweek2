import http from "http";
import Post from "../models/post";
import handleSuccess from "../service/handleSuccess";
import handleError from "../service/handleError";
import { IPost } from "../type";

const posts = {
  async getPosts(req: http.IncomingMessage, res: http.ServerResponse){
    const posts = await Post.find();
    handleSuccess(res, posts);
  },
  async createPost(req: http.IncomingMessage, res: http.ServerResponse, body: string){
    try {
      const data = JSON.parse(body) as IPost;
      
      if(!!data.content){
        const newPost = await Post.create<IPost>({
          name: data.name,
          content: data.content
        });
        handleSuccess(res, newPost)
      }else{
        const error = new Error("");
        handleError(res, error);
      }

    } catch (error: unknown) {
      if (error instanceof Error) {
        handleError(res, error);
      }
    }
  },
  async deletePost(req: http.IncomingMessage, res: http.ServerResponse){
    const id = req.url?.split('/').pop()!;
    await Post.findByIdAndDelete(id);
    handleSuccess(res, null);
  },
  async deleteAllPosts(req: http.IncomingMessage, res: http.ServerResponse){
    await Post.deleteMany({});
    handleSuccess(res, null);
  },
  async updatePost(req: http.IncomingMessage, res: http.ServerResponse, body: string){
    const id = req.url?.split('/').pop()!;
    const data = JSON.parse(body) as IPost;
    const post = await Post.findByIdAndUpdate(id, data, { new: true });
    handleSuccess(res, post);
  }
}

export default posts;