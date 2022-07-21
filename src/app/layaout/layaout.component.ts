import { Component, OnInit } from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.css']
})
export class LayaoutComponent implements OnInit {

  constructor(private permissionsService: NgxPermissionsService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const roles = [user.role]
    this.permissionsService.loadPermissions(roles);
  }

}
