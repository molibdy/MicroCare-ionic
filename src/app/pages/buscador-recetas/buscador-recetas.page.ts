
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from 'src/app/models/recipes';
import { MicronutrientesService } from 'src/app/shared/micronutrientes.service';
import { RecetasService } from 'src/app/shared/recetas.service';




@Component({
  selector: 'app-buscador-recetas',
  templateUrl: './buscador-recetas.page.html',
  styleUrls: ['./buscador-recetas.page.scss'],
})
export class BuscadorRecetasPage implements OnInit {
 

  public date=new Date();
  public dateString=`${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`;
  public yesterday=`${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()-1}`;


  public recetas: Recipes[]
  // public listaParaTi : Recipes[]
  public listaNuevas : Recipes[]



  public mySwitch :boolean = false;
  public recetasBuscar:Recipes[] = null;
  public inputSearch:string = ""

  constructor(
    public recetaService:RecetasService,
    private router:Router,
    public micronutrienteServicio:MicronutrientesService, 

  ) {
    this.router=router

    
    // this.listaNuevas=this.recetaService.recetas ///habrá que cambiarlo por this.recetaService.recetasNuevas y añadir un campo a la tabla que sea fecha de creación
    this.recetaService.recetas

    this.recetaService.getRecetasParaTi(JSON.parse(sessionStorage.getItem('userSession')).user_id,this.yesterday)
    .subscribe((recetas:any)=>{        // Lista recetas para ti
      console.log(`Obtener recetas para ti: ${recetas.type}`);
      this.recetaService.recetasParaTi = []
      for(let i=0;i<this.recetaService.recetas.length;i++){
        let allRecipes=this.recetaService.recetas[i]
        if(recetas.message.some(function(receta){
          return receta.recipe_id==allRecipes.recipe_id
        })){
          this.recetaService.recetasParaTi.push(this.recetaService.recetas[i])
        } 
      }
    }) 
   }





   verRecetaParaTi(i:number){
     this.recetaService.selectedReceta=this.recetaService.recetasParaTi[i]
     this.router.navigate(['/vista-receta']);
   }


   verRecetaNuevas(i:number){
    this.recetaService.selectedReceta=this.recetaService.recetas[i]
    this.router.navigate(['/vista-receta']);
   }

  

    
/////////////////////nueva parte

buscar(search){

  console.log(this.inputSearch.length);
  
  this.recetasBuscar=[]
  this.inputSearch = search
 
  let input = this.inputSearch.toUpperCase();
  console.log(input);

  console.log(this.inputSearch.length);
  this.mySwitch = true
  
  for(let i=0; i < this.recetaService.recetas.length; i++){
    if(this.recetaService.recetas[i].recipe_name.toUpperCase().indexOf(input) > -1){
      this.recetasBuscar.push(this.recetaService.recetas[i])
    }
  }  

  

}




   rutaReceta(i){
    //  this.recetaService.selectedReceta_id=recipe_id  ESTO DEBERÍA SER OBJETO RECETA?
    this.micronutrienteServicio.getMicrosReceta(this.recetasBuscar[i].recipe_id).subscribe((micronutrientes:any)=>{
     if(micronutrientes.type==1 || micronutrientes.type==-1){
       this.micronutrienteServicio.microsReceta=micronutrientes.message;
     }
     this.recetaService.selectedReceta = this.recetasBuscar[i]
     // this.micronutrientesBuscar[i] = this.micronutrientesServicio.linkMicro()
     this.router.navigate(['/vista-receta']);
     console.log(this.recetaService.selectedReceta.photo_url)
    })
   }
   

  ngOnInit(): void {
    // console.log('cargando buscador')
    // this.recetaService.getRecetasParaTi(JSON.parse(sessionStorage.getItem('userSession')).user_id)
    // .subscribe((recetas:any)=>{
    //   console.log(recetas.message)
    //   for(let i=0;i<this.recetas.length;i++){
    //     if(!recetas.message.includes(this.recetas[i].recipe_id)){
    //       this.listaParaTi.push(this.recetas[i])
    //    } 
    //   }

    // })


    

  }

}