/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
import { Allergen } from './allergen';
import { Dietas } from './dietas';
import { Ingredient } from './ingredient';

export class Preferencias {
    public dietas:Dietas[];
    public alergenos:Allergen[];
    public ingredientes:Ingredient[];

}