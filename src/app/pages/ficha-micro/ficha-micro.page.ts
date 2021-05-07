import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';
import { Micronutrients } from 'src/app/models/micronutrient';
import { Recipes } from 'src/app/models/recipes';
import { IngredientesService } from 'src/app/shared/ingredientes.service';
import { MicronutrientesService } from 'src/app/shared/micronutrientes.service';
import { RecetasService } from 'src/app/shared/recetas.service';

@Component({
  selector: 'app-ficha-micro',
  templateUrl: './ficha-micro.page.html',
  styleUrls: ['./ficha-micro.page.scss'],
})
export class FichaMicroPage implements OnInit {
  public ingredientes: Ingredient[]
  public recetas:Recipes[] = []
  public recetasRespuesta
  public selectedMicronutriente: Micronutrients
  
    constructor(private router:Router, 
      public MicronutrientesService: MicronutrientesService, 
      public RecetasService:RecetasService, 
      public IngredientesService:IngredientesService) {

        if(this.MicronutrientesService.selectedGroup.group_id==0){
          this.router.navigate(['/home'])
        }
      //this.micronutrientes = JSON.parse(sessionStorage.getItem('micronutrientes'))
    this.ingredientes = this.IngredientesService.ingredientesRicos
    console.log(this.ingredientes);
    

    this.recetas = this.RecetasService.recetasRicas
  
    // this.ingredientesRicos()
    // this.recetasRicas()
    
  }

  verRecetaMicro(i:number){
    this.RecetasService.selectedReceta=this.recetas[i]
    this.router.navigate(['/vista-receta']);
  }


    
  


  ngOnInit(): void {

  
    
  }

}
