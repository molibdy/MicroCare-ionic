
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoadingService } from 'src/app/shared/loading.service';
import { LoginInfoService } from 'src/app/shared/login-info.service';
import { MicronutrientesService } from 'src/app/shared/micronutrientes.service';
import { ProgressService } from 'src/app/shared/progress.service';
import { RecetasService } from 'src/app/shared/recetas.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

public loginForm: FormGroup
public isNonRegisteredC:boolean = false
  

public date=new Date()
public dateString=`${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`


  constructor(private formBuilder: FormBuilder, 
    private apiService: LoginInfoService, 
    public progressService:ProgressService, 
    public recetaService:RecetasService,
    public micronutrientService:MicronutrientesService,
    private router:Router,
    public loadingService:LoadingService) { 
    this.buildForm()
    this.router=router
 
  }
  
  

  public entrar(){
    this.apiService.isDentro=true
  }

 
  buildForm(){
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(4)]],
    })

  }

  logearse(){
    
    let loginInfo={username: this.loginForm.value.username, password : this.loginForm.value.password} 
    this.apiService.obtenerUsuario(loginInfo)
    .subscribe((data:any)=>{ 
      console.log(`Obtener usuario: ${data.type}`);
      if(data.type == 1){
        console.log(data.message)
        this.apiService.user = new User(data.message[0].user_id, data.message[0].username, data.message[0].profile_picture)
        sessionStorage.setItem('userSession',JSON.stringify(this.apiService.user))
        console.log(data.message)  //  USER CORRECTO
        this.loadingService.isLogeando=true;
        this.loadingService.loadAll();


      }else if(data.type == -1){
        console.log(data.message);
        console.log('error');

// MANDAR MENSAJE DE USUARIO/PASSWORD INCORRECTOS


          this.isNonRegisteredC = true 
      }
      
    })
  
  }

  
  ngOnInit(): void {
    // if(this.isNonRegisteredC != false){
    //   this.isNonRegisteredC = true
    // }

  }
  
}
