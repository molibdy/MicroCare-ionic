import { Component } from '@angular/core';
import { LoginInfoService } from './shared/login-info.service';
import { LoadingService } from './shared/loading.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public LoginInfoService:LoginInfoService,
    public loadingService:LoadingService,
    private router:Router
  ) {

    if(JSON.parse(sessionStorage.getItem('userSession'))!=null){
      console.log(JSON.parse(sessionStorage.getItem('userSession')).user_id)
      this.LoginInfoService.user=JSON.parse(sessionStorage.getItem('userSession'));
      this.loadingService.loadAll()
    }else{
      this.router.navigate(['login']);
    }

  }
}
