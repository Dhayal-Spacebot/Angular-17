import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/IPost';
import { Subject, catchError, combineLatest, forkJoin, map, shareReplay, throwError } from 'rxjs';
import { DeclartiveCategoryService } from './declartive-category.service';

@Injectable({
  providedIn: 'root'
})
export class DeclartivePostService {
 
  private endPoint =
    'https://rxjs-posts-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient, private declartiveService: DeclartiveCategoryService) { }

  Post$ = this.http.get<{ [Id: string]: IPost }>(this.endPoint).pipe(
    map((posts) => {
      let postsData: IPost[] = [];
      for (let id in posts) {
        postsData.push({ ...posts[id], id });
      }
      return postsData;
    }), catchError(this.handleError), shareReplay(1)
  );

  // we can either go with forkjoin or combine latest

  PostWithCategory$ = combineLatest([this.Post$, this.declartiveService.categories$]).pipe(map(([posts, categories]) => {
    return posts.map((post) => {
      return {
        ...post,
        categoryName: categories.find((category) => category.id === post.categoryId)?.title
      }  as IPost;
    })
  }), catchError(this.handleError))

  private selectedPostSubject = new Subject<IPost>();
  selectedPostAction$ = this.selectedPostSubject.asObservable();

   selectedPost(data: IPost) {
    this.selectedPostSubject.next(data);
  }

  selectedPost$ = combineLatest([this.PostWithCategory$,this.selectedPostAction$]).pipe(map(([posts, selectedPost]) => {
    return posts.find( post => post.id === selectedPost.id)
  }))

  handleError(error: Error) {
    return throwError(( ) => {
      return "Error occured"
    })
  }

}
