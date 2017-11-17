export class User {
    name:string;
    list: Array<{title:string; description:string, check:boolean}>;

    constructor(){
        this.name="";
        this.list=[{title:"", description:"", check:false}]
    }
}
