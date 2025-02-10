"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const User_1 = require("./User");
const Registretion_1 = require("./Registretion");
const Instructor_1 = require("./Instructor");
const Certificate_1 = require("./Certificate");
class Participant extends User_1.User {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    searchActivity() {
        let activity = Activity.searchActivity();
        return activity;
    }
    registerForActivity(activity) {
        let registration = new Registretion_1.Registration(1, this, activity, 'รออนุมัติ');
        return true;
    }
    downloadCertificate(activity) {
        let instructor = new Instructor_1.Instructor();
        return new Certificate_1.Certificate(1, 'content', instructor, 'ลายเซ็นต์', 'กิจกรรม');
    }
    toString() {
        return `Participant[${super.toString()}]`;
    }
}
exports.Participant = Participant;
