import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abonnes',
  templateUrl: './abonnes.component.html',
  styleUrls: ['./abonnes.component.css']
})
export class AbonnesComponent implements OnInit {

  loginUser!:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const paramValue = params['username'];
      this.loginUser=paramValue;


      console.log(this.loginUser);
  
  
    });
  }














  
}
