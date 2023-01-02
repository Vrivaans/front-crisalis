import { TokenService } from './../../services/token.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  esta_logeado = false;

  constructor(private router: Router, private tokenService: TokenService){}
  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.esta_logeado = true;
    }else{
      this.esta_logeado = false;
    }
  }


}
