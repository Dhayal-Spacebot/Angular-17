import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./components/counter/counter.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from "./components/address-group/address-group.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostsComponent } from "./components/posts/posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ReactiveFormsModule, AddressGroupComponent, HeaderComponent, PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'learn-17';
  counter: number = 0;

  form: FormGroup = new FormGroup({
    displayName: new FormControl(''),
    deliveryAddress: new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl('')
    })

  })

  constructor() {
   
  }
  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
    }
  
}
