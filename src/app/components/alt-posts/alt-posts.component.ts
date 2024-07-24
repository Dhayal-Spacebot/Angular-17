import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeclartivePostService } from '../../services/declartive-post.service';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from '../single-post/single-post.component';
import { IPost } from '../../models/IPost';

@Component({
  selector: 'app-alt-posts',
  standalone: true,
  imports: [CommonModule, SinglePostComponent],
  templateUrl: './alt-posts.component.html',
  styleUrl: './alt-posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AltPostsComponent {
  private postService = inject(DeclartivePostService);

  posts$ = this.postService.PostWithCategory$;
  selectedPost$ = this.postService.selectedPost$;

  onSelect(post: IPost, event: Event) {
    event.preventDefault();
    this.postService.selectedPost(post);
  }
}
