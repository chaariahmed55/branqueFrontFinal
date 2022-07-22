import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../shared/model/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../shared/service/utilisateur.service";

@Component({
  selector: 'app-add-edit-agent',
  templateUrl: './add-edit-agent.component.html',
  styleUrls: ['./add-edit-agent.component.css']
})
export class AddEditAgentComponent implements OnInit {
  agent = new Utilisateur();
  errorMessage: any;
  agentId: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.agentId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.agentId) {
      this.getById();
    }
  }

  public save(): void {
    this.userService.saveAgent(this.agent).subscribe(res => {
      this.router.navigate(['/wafa/listAgent']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  public update(): void {
    this.userService.updateAgent(this.agent).subscribe(res => {
      this.router.navigate(['/wafa/listAgent']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  valider() {
    if(this.agentId) {
      this.update();
    }else {
      this.save();
    }

  }


  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  cancel(): void {
    this.getById();
  }

  getById() {
    this.userService.getById(this.agentId).subscribe(res => {
      this.agent = res;
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }
}
