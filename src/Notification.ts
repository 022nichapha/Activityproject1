import { Participant } from "./Participant"

class Notification {
    private notification : number
    private message : string
    private recipient : Participant
    private status : string

    constructor(notification:number,message:string,recipient:Participant,status:string){
        this.notification=notification
        this.message=message
        this.recipient=recipient
        this.status=status
    }
    public toString():string{
        return `Notification[notificationId=${this.notification}, message=${this.message}, recipient=${this.recipient}, status=${this.status}]`
    }
}
export { Notification}