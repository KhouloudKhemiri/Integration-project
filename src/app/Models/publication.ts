export class Publication {
    public id :number;
    public  Description:String;
    public file:any ;
    public date:String ;
    
    constructor(id:number,Description:String,file:any,date:String){
        this.id=id;
        this.Description=Description;
        this.file=file;
        this.date=date;
        
    }
}
