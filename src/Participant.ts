import { User } from "./User";
import { Registration } from './Registration'
import { Instructor } from "./Instructor";
import { Certificate } from "./Certificate";
import { Activity } from "./Activity";

class Participant extends User {


    constructor(username: string, password: string, name: string, role: string, email: string){
        super(username, password, name, role, email)
    }


    public searchActivity(): Activity[]{
        let activity = Activity.searchActivity()
        return activity
    }

    public registerForActivity(activity: Activity): boolean {
        let registration = new Registration(1, this, activity, 'รออนุมัติ')
        return true
    }

    public downloadCertificate(activity: Activity): Certificate{
        let instructor = new Instructor()
        return new Certificate(1, 'content', instructor, 'ลายเซ็นต์', 'กิจกรรม') 
    }

    public toString():string{
        return `Participant[${super.toString()}]`
    }

}

export { Participant }