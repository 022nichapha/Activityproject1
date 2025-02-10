export class User{
    private username: string
    private password :string
    private name :string
    private role :string
    private email :string

    constructor (username:string,password:string,name:string,role:string,email:string)

    {   this.username=username
        this.password=password
        this.name=name
        this.role=role
        this.email=email
    }
    public register(username:string,password:string):boolean{
        console.log ("ลงทะเบียนสำเร็จ")
        return true
    }
    public login(username:string,password:string):boolean{
        if(this.username===username&&this.password===password){
            console.log("ล็อกอินสำเร็จ")
            return true
        }
        else{
            console.log("ล็อกอินไม่สำเร็จ")
            return false
        }
    }
    public logout():boolean{
        console.log ("Logout สำเร็จ")
        return true
        
    }
    public updateProfile(name:string,email:string):void{
        this.name=name
        this.email=email
    }
    public toString():string{
        return `User[username=${this.username}, password=${this.password}, name=${this.name}, role=${this.role}, email=${this.email}]`
    }
}