import { Component, OnInit } from '@angular/core';
import { Compte } from '../../model/compte';
import { CompteService } from '../../service/compte.service';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems:any[]=[];
  idcompte:number=0;
  comptes: Compte[];


  constructor(private compteService: CompteService) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
   }


  ngOnInit(): void {
    this.getCompteByUser(); }


  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};


getCompteByUser(): void {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  this.compteService.getCompteByUser(user.id).subscribe(data => {
    this.comptes = data;
    this.idcompte=this.comptes[0].id;
  }, ex => console.log(ex));
}




}
