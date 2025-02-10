"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, name, role, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.role = role;
        this.email = email;
    }
    register(username, password) {
        console.log("ลงทะเบียนสำเร็จ");
        return true;
    }
    login(username, password) {
        if (this.username === username && this.password === password) {
            console.log("ล็อกอินสำเร็จ");
            return true;
        }
        else {
            console.log("ล็อกอินไม่สำเร็จ");
            return false;
        }
    }
    logout() {
        console.log("Logout สำเร็จ");
        return true;
    }
    updateProfile(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        return `User[username=${this.username}, password=${this.password}, name=${this.name}, role=${this.role}, email=${this.email}]`;
    }
}
exports.User = User;
