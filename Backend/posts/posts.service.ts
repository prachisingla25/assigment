import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [];

  create(post: any) {
    this.posts.push({ id: Date.now(), ...post });
    return { message: 'Post created successfully' };
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }

  update(id: number, updatePostDto: any) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex >= 0) {
      this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };
      return { message: 'Post updated successfully' };
    }
    return { message: 'Post not found' };
  }

  remove(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
    return { message: 'Post deleted successfully' };
  }
}