import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GramosPipe } from '../pipes/gramos.pipe';
import { GramsPipe } from '../pipes/grams.pipe';



@NgModule({
  declarations: [GramosPipe,GramsPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModuleModule { }
