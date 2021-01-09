import { Component } from '@angular/core';
import { UserService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Yael';
  data:any

  constructor(private user:UserService){}
  ngOnInit(){
    this.user.getData().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }

 
}
