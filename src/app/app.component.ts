import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from "./address-group/address-group.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ReactiveFormsModule, AddressGroupComponent],
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
    setTimeout(() => {
      console.log('hello')
      this.counter = 20;
    },2000);
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
    }
  
}
