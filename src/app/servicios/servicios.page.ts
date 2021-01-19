import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  arrayPosts:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

  constructor(public postServices:PostServiceService, private router:Router) {

  }

  ngOnInit() {
    this.arrayPosts = this.postServices.getPosts();
  }

}
