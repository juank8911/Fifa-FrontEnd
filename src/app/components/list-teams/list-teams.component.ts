import { Component, OnInit } from '@angular/core';
import { Teams } from './teams';
import { TeamsService } from 'src/app/services/teams.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  teams!: Teams[];
  rest:any = [];

  constructor(private TeamsService:TeamsService){}

  ngOnInit(): void {
    // Swal.fire('Any fool can use a computer');
    this.TeamsService.login()
    
    //  .subscribe(
    //   response => {console.log('usario validado');
    //    console.log(response)} 
    // );

    // this.TeamsService.getTeams().subscribe(
    // teams => {this.teams = teams;
    //   console.log(this.teams);}
    // )  


    
  }

}
