import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-gimnasio',
  templateUrl: './mi-gimnasio.component.html',
  styleUrls: ['./mi-gimnasio.component.css']
})
export class MiGimnasioComponent implements OnInit {

	public myGym: string;

	constructor() { 

	}

	ngOnInit() {
		this.myGym = 'Average Joe Gym';
	}

}
