import { Activity } from './Activity';
import { User } from "./User";
import { Participant } from "./Participant";
import {Activity} from "./Activity"
import { Registration } from './Registration';
import { Certificate } from './Certificate';
class Instructor extends User{
    constructor(username:string,password:string,name:string,role:string,email:string){
        super(username,password,name,role,email)
    }
public createActivity(activityId: number,name: string,organizer: string,maxPaticipant: number,activityPoriod: string,registrationPeriod: string,status: string,approvalRequire: boolean,certificateIssued: boolean,instructor: Instructor,schedule: File):void {
    let activity = Activity.createActivity(activityId,name,organizer,maxPaticipant,activityPoriod,registrationPeriod,status,approvalRequire,certificateIssued,instructor,schedule)
}   
public issueCertificate(certificateId:number,content:string,signature:string,template:string):void {
    Certificate.generateCertificate(certificateId,content,this,signature,template)
}
public static searchActivity(): Activity[]{
        let activity = []
        activity.push(new Activity(1,'draw','',150,'','','',true,true,instructor,'sss'))
        return activity
    }

public approveParticipant(activity: Activity, participant:Participant, registrations:Registration[]):void {
    activity.approvePaticipant(participant,registrations)

}
    }

export {Instructor}
