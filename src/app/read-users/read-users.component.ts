import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css']
})
export class ReadUsersComponent implements OnInit {

  items:any;

  constructor(private connection:ConnectService) { 
    connection.getItem().subscribe(item=>{
      this.items = item;
      // console.log(this.items);
    })
    
  }

  ngOnInit() {
  }

}
