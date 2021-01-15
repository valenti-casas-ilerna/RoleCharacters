import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.getStarWarsVehicles();
    this.swService.getStarWarsPeople();
    this.swService.getStarWarsVehicles();
  }

}
