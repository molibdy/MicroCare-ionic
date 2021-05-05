import { Component, OnInit } from '@angular/core';
import { IngestaService } from 'src/app/shared/ingesta.service';

@Component({
  selector: 'app-ingesta-menu',
  templateUrl: './ingesta-menu.page.html',
  styleUrls: ['./ingesta-menu.page.scss']
})
export class IngestaMenuPage implements OnInit {
  

  constructor(public apiIngesta:IngestaService) { }

  ngOnInit(): void {
  }
  switchIntReceta()
  {
    if(this.apiIngesta.introducirRecetaBooleano)
    {
      this.apiIngesta.introducirRecetaBooleano = false
    }
    else
    {
      this.apiIngesta.introducirRecetaBooleano = true
    }

  }

}
