"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(notification, message, recipient, status) {
        this.notification = notification;
        this.message = message;
        this.recipient = recipient;
        this.status = status;
    }
    toString() {
        return `Notification[notificationId=${this.notification}, message=${this.message}, recipient=${this.recipient}, status=${this.status}]`;
    }
}
exports.Notification = Notification;
