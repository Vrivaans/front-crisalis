import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenService) { }
  esta_logeado = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.esta_logeado = true;
    } else{
      this.esta_logeado = false;
    }
  }
  login(){
    this.router.navigate(['/login'])
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
}

}
