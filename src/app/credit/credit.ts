export class Credit {

    type: String;
    montant : Number;
    
    date ?: Date;
    status : number;
    constructor(type:String,montant:Number,status:number,date?:Date){
       
        this.type=type;
        this.montant=montant;
       
        this.date=date;
        this.status=status
    }

}