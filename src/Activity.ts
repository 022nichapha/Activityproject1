
import { Certificate } from './Certificate';
import { Instructor } from './Instructor';
import { Notification } from './Notification';
import { Participant } from './Participant';
import { Registration } from './Registration';
export class Activity {
    private activityId: number;
    private name: string;
    private organizer: string;
    private maxPaticipant: number;
    private activityPoriod: string;
    private registrationPeriod: string;
    private status: string;
    private approvalRequire: boolean;
    private certificateIssued: boolean;
    private instructor: Instructor;
    private schedule: File;

    constructor(activityId: number,
    name: string,
    organizer: string,
    maxPaticipant: number,
    activityPoriod: string,
    registrationPeriod: string,
    status: string,
    approvalRequire: boolean,
    certificateIssued: boolean,
    instructor: Instructor,
    schedule: File
) {
        this.activityId = activityId;
        this.name = name;
        this.organizer = organizer;
        this.maxPaticipant = maxPaticipant;
        this.activityPoriod = activityPoriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequire = approvalRequire;
        this.certificateIssued = certificateIssued;
        this.instructor = instructor;
        this.schedule = schedule
    }

public static searchActivity(): Activity[]{
        let activity = []
        activity.push(new Activity(1,'draw','',150,'','','',true,true,ins,sss))
        return activity
    }
    public static createActivity(activityId: number,name: string,organizer: string,maxPaticipant: number,activityPoriod: string,registrationPeriod: string,status: string,approvalRequire: boolean,certificateIssued: boolean,instructor: Instructor,schedule: File){
        return new Activity(activityId,name,organizer,maxPaticipant,activityPoriod,registrationPeriod,status,approvalRequire,certificateIssued,instructor,schedule)
    }

    public updateactivity(activityId: number,name: string,organizer: string,maxPaticipant: number,activityPoriod: string,registrationPeriod: string,status: string,approvalRequire: boolean,certificateIssued: boolean,instructor: Instructor,schedule: File):void {
        this.activityId = activityId;
        this.name = name;
        this.organizer = organizer;
        this.maxPaticipant = maxPaticipant;
        this.activityPoriod = activityPoriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequire = approvalRequire;
        this.certificateIssued = certificateIssued;
        this.instructor = instructor;
        this.schedule = schedule
    }
    public publishActivity():void {
        this.status = 'published'
    }
    public approvePaticipant(participant:Participant,registrations:Registration[]):void{
        for(let i = 0; i < registrations.length; i ++) {
            let par = registrations[i].getPaticipant()
        if (participant.getEmail() === par.getEmail()){
            registrations[i].updateStatus('approved')
            let send = new Notification(1,'approved suc sess',participant,'approved')
            }
        console.log(send.toString())
        }
    }
    public generateCertificate(registrations:Registration[],insturctor:Instructor,signature:string,template:string): Certificate {
        
        let c1 = new Certificate(new Date().getTime(),'congratulation',insturctor,signature,template)
        registrations.forEach(e => {
    let participant = e.getPaticipant()
Certificate.generateCertificate(new Date(),`congratulation ${participant.getName()}`,insturctor,signature,template)
        });
        return c1
    }
}

