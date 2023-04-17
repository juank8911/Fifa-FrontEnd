import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TeamsService } from 'src/app/services/teams.service';
import { Teams } from '../list-teams/teams';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-team',
  templateUrl: './form-add-team.component.html',
  styleUrls: ['./form-add-team.component.css']
})

export class FormAddTeamComponent implements OnInit {

  teams: Teams = new Teams();

    constructor(private service: TeamsService, private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

    save():void
    {
        this.service.crearTeam(this.teams).subscribe(
          response=>{
            console.log(response);
            this.router.navigate(["/"])
          }
        )
    }
}
