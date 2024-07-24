import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeclartivePostService } from '../../services/declartive-post.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, EMPTY, catchError, of } from 'rxjs';


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePostComponent {
  errorMessageSubject = new BehaviorSubject<string>('');
  errorMessageAction$ = this.errorMessageSubject.asObservable();

  constructor(private postService: DeclartivePostService) {}

  post$ = this.postService.selectedPost$.pipe(catchError((error) => {
    this.errorMessageSubject.next(error);
    return EMPTY;
  }));

}
