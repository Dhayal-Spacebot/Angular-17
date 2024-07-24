import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DeclartivePostService } from '../../services/declartive-post.service';
import { IPost } from '../../models/IPost';
import { CommonModule } from '@angular/common';
import { DeclartiveCategoryService } from '../../services/declartive-category.service';
import { BehaviorSubject, Subject, combineLatest, filter, find, map } from 'rxjs';

@Component({
  selector: 'app-declartive-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './declartive-posts.component.html',
  styleUrl: './declartive-posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DeclartivePostsComponent {

  selectedCategorySubject = new BehaviorSubject<string>('');
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  selectedCategoryId = '';

  Post$ = this.postService.PostWithCategory$;
  Category$ = this.categoryService.categories$;



  // filteredPosts$ = this.Post$.pipe(
  //   map((posts) => {
  //     return posts.filter((post) =>
  //       this.selectedCategoryId
  //         ? post.categoryId === this.selectedCategoryId
  //         : true
  //     );
  //   })
  // );

  filteredPosts$ = combineLatest([this.Post$, this.selectedCategoryAction$]).pipe(map(([posts, selectedCategoryId]) => {
   return posts.filter((post) =>  selectedCategoryId ? post.categoryId === selectedCategoryId : true)
  }));


 

    
  constructor(private postService: DeclartivePostService, 
    private categoryService: DeclartiveCategoryService) {
  }

  onSelectionChange(event: Event) {
    let selectedCategoryId = (event.target as HTMLSelectElement).value;
    this.selectedCategorySubject.next(selectedCategoryId);
    }


}
