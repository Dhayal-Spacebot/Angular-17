import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPost } from '../models/IPost';
import { map, mergeMap } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // private http = inject(HttpClient);
  private categoryService = inject(CategoryService);
  private endPoint =
    'https://rxjs-posts-default-rtdb.firebaseio.com/posts.json';

  constructor(private http:HttpClient) {}

  getPosts() {
    return this.http.get<{ [Id: string]: IPost }>(this.endPoint).pipe(
      map((posts) => {
        let postsData: IPost[] = [];
        for (let id in posts) {
          postsData.push({ ...posts[id], id });
        }
        return postsData;
      })
    );
  }


  getPostsWithCategory() {
    return this.getPosts().pipe(
      mergeMap((posts) => {
        return this.categoryService.getCategories().pipe(
          map((categories) => {
            return posts.map((post) => {
              return {
                ...post,
                categoryName: categories.find(
                  (category) => category.id === post.categoryId
                )?.title,
              };
            });
          })
        );
      })
    );
  }

}
