import { User } from "./User";
import { Participant } from "./Participant";
import { Registration } from "./Registration";
import { Instructor } from "./Instructor";
import { Certificate } from "./Certificate";
import { Notification } from "./Notification";
import { Activity } from "./Activity";
let beam022=new User("Ratchanon","deekub","tae","student","664259013@webmail.npru.ac.th")
console.log(beam022.toString())

let pa1 = new Participant("Phongsakorn", "112", 'Boom', "student", "664259011@webmail.npru.ac.th")

const ac1 = new Activity(1,'cc','OG',150,'30 DEc','28 DEc','published',true,true,'',sch)

console.log(pa1.toString())

const Rregistrations = []
let reg = new Registration(1, pa1, ac1, 'รออุมัติ')
console.log(reg.toString())

let Api = new Certificate(1,"กิจกรรม",new Instructor(),"ลายเซ็น","")

console.log(Api.toString())

let eiei = new Notification(1,"ผมทำได้แล้วครับ เย้", pa1 , "รออนุมัติ")

console.log(eiei.toString())