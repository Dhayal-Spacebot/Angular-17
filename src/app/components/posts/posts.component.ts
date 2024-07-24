import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/IPost';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: IPost[] = [];
  postsSubscription!: Subscription;
  constructor(private postService: PostService) {
    
  }

  ngOnInit() {
  this.getPosts();
  }

  getPosts() {
    this.postsSubscription =   this.postService.getPostsWithCategory().subscribe({
      next:(data) => {
        this.posts = data;
      }
    })
  }

  ngOnDestroy() {
    this.postsSubscription && this.postsSubscription.unsubscribe();
  }

}
