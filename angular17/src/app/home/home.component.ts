import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
modulename='customer';

changemodule(event:any){
  this.modulename=event.target.value;
}


customerlist=signal([
{id:1,name:' AAA',country:'India'},
{id:2,name:'BBB',country:'India'},
{id:3,name:'CCC',country:'India'}
]);


customers=([
  {id:1,name:' AAA',country:'India'},
  {id:2,name:'BBB',country:'India'},
  {id:3,name:'CCC',country:'India'}
  ]);


  

} 