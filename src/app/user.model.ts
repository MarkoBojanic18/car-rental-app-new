export class User{
    constructor(public id: string, public email: string, public password:string, public firstname: string,public surname:string, public phoneNumber:string,
         public admin: boolean, private _token: string, private tokenExpirationDate: Date){

         }

        


 get token(){
             if( !this.tokenExpirationDate || this.tokenExpirationDate <= new Date()){
                    return null;
             }
             return this._token;
}

}