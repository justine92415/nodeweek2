import { Model } from "mongoose";

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

export interface IPost {
  content: string;
  image?: string;
  createdAt?: Date;
  name: string;
  likes?: number;
}