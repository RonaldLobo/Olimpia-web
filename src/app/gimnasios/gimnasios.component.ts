import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gimnasios',
  templateUrl: './gimnasios.component.html',
  styleUrls: ['./gimnasios.component.css']
})
export class GimnasiosComponent implements OnInit {

	public myGym: string;

	constructor() { 

	}

	ngOnInit() {
		this.myGym = 'Average Joe Gym';
	}

}
