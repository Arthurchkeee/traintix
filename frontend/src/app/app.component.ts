import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './services/hello.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  constructor(private service: HelloService) {
    
    this.service.getHello().subscribe((value)=>{console.log(value)});
  }
}
