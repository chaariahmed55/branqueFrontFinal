import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../shared/model/utilisateur";
import {AuthService} from "../shared/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Utilisateur();
  errorMessage: any;
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authenticate(this.user).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      this.router.navigate(['/']).then(t => location.reload());
    }, ex => {
      this.errorMessage = 'Erreur d\'authentification: Merci de vérifier votre email ou  mot de passe';
      console.log(ex);
    });
  }
}
