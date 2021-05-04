/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
import { Microscore } from './microscore';
export class Favourites {

    public favourite_id :number;
    public name :string ;
    public intake_id:number;
    public microscore: Microscore[];
    public consumed_favourites_id: number;
    // public score: Micronutrient []

}