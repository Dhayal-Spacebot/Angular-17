import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // private http = inject(HttpClient);
  private endPoint =
    'https://rxjs-posts-default-rtdb.firebaseio.com/categories.json';
  constructor( private http: HttpClient) {}

  getCategories() {
    return this.http.get<{ [id: string]: ICategory; }>(this.endPoint).pipe(
      map((categories) => {
        let categoryData: ICategory[] = [];
        for (let id in categories) {
          categoryData.push({ ...categories[id], id });
        }
        return categoryData;
      })
    );
  }
}
