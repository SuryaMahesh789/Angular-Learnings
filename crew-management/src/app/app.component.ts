import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrewComponent } from './crew/crew.component';
import { CrewDesignsComponent } from './crew-designs/crew-designs.component';
import { UsersModule } from './users/users.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatButtonModule, CommonModule, FormsModule, CrewComponent, CrewDesignsComponent,UsersModule]
})

export class AppComponent implements OnInit {
  title = 'crew-management';
  userName:string='Surya Mahesh Kolisetty';
  age:number=1;

  ngOnInit(): void {
    
  }

  ngDestroy():void {

  }

}
