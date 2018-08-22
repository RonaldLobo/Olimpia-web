import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-gimnasio',
  templateUrl: './editar-gimnasio.component.html',
  styleUrls: ['./editar-gimnasio.component.css']
})
export class EditarGimnasioComponent implements OnInit {

	public myGym: string;

	constructor() { 

	}

	ngOnInit() {
		this.myGym = 'Average Joe Gym';
	}

}
