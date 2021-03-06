import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlannedRecipe } from 'src/app/models/planned-recipe';
import { Progress } from 'src/app/models/progress';
import { Recipes } from 'src/app/models/recipes';
import { MicronutrientesService } from 'src/app/shared/micronutrientes.service';
import { ProgressService } from 'src/app/shared/progress.service';
import { RecetasService } from 'src/app/shared/recetas.service';


@Component({
  selector: 'app-vista-receta',
  templateUrl: './vista-receta.page.html',
  styleUrls: ['./vista-receta.page.scss'],
})
export class VistaRecetaPage implements OnInit {

  public selectedReceta:Recipes;

  // boton planear
  public showDatePicker:boolean;
  public selectedDate:string
  public isDateSelected:boolean;


  //boton consumida
  public isConsumed:boolean;
  public alreadyConsumed:boolean
  public showAlreadyConsumed:boolean


  public date=new Date()
  public dateString=`${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`


  constructor(
    public micronutrientService:MicronutrientesService,
    public progressService:ProgressService,
    public recetasService:RecetasService,
    private router:Router
    ) { 
      if(this.recetasService.selectedReceta.recipe_id==0){
        this.router.navigate(['/buscar-receta'])
      }
      this.selectedReceta=this.recetasService.selectedReceta
    
    this.showDatePicker=false
    this.selectedDate=''
    this.isDateSelected=false

    this.isConsumed=false
    this.alreadyConsumed=false
    this.showAlreadyConsumed=false
    this.getDetalles()
  }





  public selectDate(){
    if(this.showDatePicker){
      this.showDatePicker=false
    }else{
      this.showDatePicker=true
    }
    this.isDateSelected=false
    this.showAlreadyConsumed=false
  }

  public addRegistro(){
    console.log('añadiendo registro')
    if(this.isConsumed){
      console.log('ya consumida')
      this.alreadyConsumed=true
      this.showAlreadyConsumed=true
    }else{
      console.log('añadiendo progreso')
       //Añade la microscore de la receta al progreso del user
      this.progressService.updateProgress(new Progress(JSON.parse(sessionStorage.getItem('userSession')).user_id,this.dateString,this.selectedReceta.microscore))
      .subscribe((updated:any)=>{
        console.log('progreso añadido, type' + updated.type)
        if(updated.type==1 || updated.type==2){
          this.progressService.getProgress(JSON.parse(sessionStorage.getItem('userSession')).user_id,this.dateString)
          .subscribe((progreso:any)=>{
            this.progressService.totalProgress.percents=progreso.message
            sessionStorage.setItem('totalProgress',JSON.stringify(this.progressService.totalProgress))
            
            //Añade receta al día del user
            let addRecipe=new PlannedRecipe();
            addRecipe.date=this.dateString;
            addRecipe.isConsumed=true;
            addRecipe.recipe_id=this.selectedReceta.recipe_id
            addRecipe.user_id=JSON.parse(sessionStorage.getItem('userSession')).user_id
            this.recetasService.addRecipeToPlan(addRecipe).subscribe((addition:any)=>{
              if(addition.type==1){
                this.isConsumed=true;
              }
            })
          })
        }
      })
     
      
    }
    this.isDateSelected=false
    this.showDatePicker=false
  }
  public getDetalles(){
    this.recetasService.getSelectedDetails(this.selectedReceta.recipe_id).subscribe((detalles:any)=>{
      console.log(detalles)
      this.selectedReceta.alergenos=[];
      for(let i=0; i<detalles.message.length;i++){
        if(detalles.message[i].allergen_name!=null){
          if(!this.selectedReceta.alergenos.includes(detalles.message[i].allergen_name)){
            this.selectedReceta.alergenos.push(detalles.message[i].allergen_name)
          }
        }
      }
      console.log(this.selectedReceta.alergenos)
    })
  }
  

  public addToDay(date:string){
    if(date.length>0){
      let cleanDate=date.split('T')
      this.selectedDate=cleanDate[0]
      console.log(this.selectedDate)
     
      //Añade el id de la receta a la tabla de RecetasPlaneadas
      let addRecipe=new PlannedRecipe();
      addRecipe.date=this.selectedDate;
      addRecipe.isConsumed=false;
      addRecipe.recipe_id=this.selectedReceta.recipe_id
      addRecipe.user_id=JSON.parse(sessionStorage.getItem('userSession')).user_id
      this.recetasService.addRecipeToPlan(addRecipe).subscribe((addition:any)=>{
        if(addition.type==1){
          this.isDateSelected=true
          this.showDatePicker=false
          this.showAlreadyConsumed=false
        }
      })
    }
  }

  // public goToPlan(){
  //   this.recetasService.selectedDate=this.dateToString(this.selectedDate)
  //   this.router.navigate(['/dia'])
  // }

  private dateToString(date:string):string{
    let splitDate=date.split('-')
    return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
  }

  public cerrarDatePicker(){
    this.showDatePicker=false;
    this.isDateSelected=false;
    this.isConsumed=false
    this.showAlreadyConsumed=false
    console.log('cerrar')
  }


  ngOnInit(): void {

    
    // Tiene que haber un microscoreService que recibe los datos del microscore 
    // de la receta y es accedido por el componente microscoreChart
    // ESTÁ EN LA BUSQUEDA DE RECETAS
  }

}

