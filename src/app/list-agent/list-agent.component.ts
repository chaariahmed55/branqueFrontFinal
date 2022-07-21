import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../shared/model/utilisateur";
import {UtilisateurService} from "../shared/service/utilisateur.service";

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {
  agents: Utilisateur[];

  constructor(private userService: UtilisateurService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userService.getAllAgent().subscribe(data => {
      this.agents = data;
    }, ex => console.log(ex));
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(data => {
        this.getAll();
    }, ex => console.log(ex));
  }
}
