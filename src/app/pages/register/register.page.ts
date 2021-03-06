import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInfoService } from 'src/app/shared/login-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public myForm: FormGroup

  public respuestaPositiva:string
  public respuestaNegativa:string
  public cuentaCreada:boolean = false
  public usuarioExistente:boolean = false
  
  constructor(private formBuilder: FormBuilder, private apiService: LoginInfoService) { 
    this.buildForm()
    this.respuestaPositiva = ""
    this.respuestaNegativa =""
  }
 
  ngOnInit(): void {
  }

buildForm(){
  this.myForm = this.formBuilder.group({
    username: [],
    password: [],
    email : []
  })
}


  //   const minPasswordLength = 8
    
  //   this.myForm = this.formBuilder.group({
  //     usuario: [ Validators.required, Validators.minLength(minPasswordLength)],
  //     password: [Validators.required, Validators.minLength(minPasswordLength)],
  //     email : [Validators.required, Validators.email]
  //   })

  // }


  registrarUsuario(){
        this.apiService.postUsuario(this.myForm.value).subscribe((data2:any)=>
        {
          console.log(this.myForm.value);
          
          console.log(data2.type);
          
          if(data2.type == 1){
            console.log(data2);
            this.respuestaPositiva = "La cuenta ha sido creada"
            this.cuentaCreada = true
          }else{
            this.respuestaNegativa = "El usuario ya existe"
            this.usuarioExistente = true
          }
      })
    }


}
