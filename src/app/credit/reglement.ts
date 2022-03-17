export class reglement {
    id_reglement?:number
    id_credit :number;
    montant : Number;
    date? : Date;
    constructor(id_credit:number,montant:Number,date?:Date,id_reglement?:number){
        this.id_credit=id_credit;
        this.montant=montant;
        this.date=date
    }
}