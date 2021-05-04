/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
export class User {

    public user_id :number;
    public username :string ;
    public profile_picture: string;

    constructor(user_id:number, username:string, profile_picture:string){
        this.user_id=user_id;
        this.username = username;
        this.profile_picture=profile_picture;
    }

}