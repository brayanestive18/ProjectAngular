import { Component, OnInit } from '@angular/core';
import { ModserverService } from './../modserver.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  conta:any[];

  constructor(private _servicio:ModserverService) {
    this.conta = _servicio.setContactos();
  }

  ngOnInit() {
  }
 
}
