import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'', loadComponent: () => import('./components/counter/counter.component').then(m => m.CounterComponent)

},
{
    path:'posts', loadComponent: () => import('./components/posts/posts.component').then(m => m.PostsComponent)

},
{
    path:'declartive-posts', loadComponent: () => import('./components/declartive-posts/declartive-posts.component').then(m => m.DeclartivePostsComponent)

},
{
    path:'alt-posts', loadComponent: () => import('./components/alt-posts/alt-posts.component').then(m => m.AltPostsComponent)

}];
