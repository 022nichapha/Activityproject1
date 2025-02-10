"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Participant_1 = require("./Participant");
const Instructor_1 = require("./Instructor");
const Certificate_1 = require("./Certificate");
const Notification_1 = require("./Notification");
let beam022 = new User_1.User("Ratchanon", "deekub", "tae", "student", "664259013@webmail.npru.ac.th");
console.log(beam022.toString());
let pa1 = new Participant_1.Participant("Phongsakorn", "112", 'Boom', "student", "664259011@webmail.npru.ac.th");
console.log(pa1.toString());
// let reg = new Registration(1, pa1, ac1, 'รออุมัติ')
// console.log(reg.toString())
let beam = new Certificate_1.Certificate(1, "กิจกรรม", new Instructor_1.Instructor(), "ลายเซ็น", "");
console.log(beam.toString());
let eiei = new Notification_1.Notification(1, "ผมทำได้แล้วครับ เย้", pa1, "รออนุมัติ");
console.log(eiei.toString());
