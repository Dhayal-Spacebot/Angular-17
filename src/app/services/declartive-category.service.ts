import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeclartiveCategoryService {
  private endPoint =
  'https://rxjs-posts-default-rtdb.firebaseio.com/categories.json';

  constructor(private http: HttpClient) { }

  categories$ = this.http
    .get<{ [id: string]: ICategory }>(
     this.endPoint
    )
    .pipe(
      map((categories) => {
        let categoriesData: ICategory[] = [];
        for (let id in categories) {
          categoriesData.push({ ...categories[id], id });
        }
        return categoriesData;
      }),
      shareReplay()
    );


}
