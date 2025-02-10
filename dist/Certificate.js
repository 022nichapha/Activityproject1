"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
class Certificate {
    constructor(certificateId, content, issuer, signature, template) {
        this.certificateId = certificateId;
        this.content = content;
        this.issuer = issuer;
        this.signature = signature;
        this.template = template;
    }
    generateCertificate() {
        return new Certificate(this.certificateId, this.content, this.issuer, this.signature, this.template);
    }
    sendCertificateNotification() {
        //let pa = new Notification(1,"พร้อมให้ดาวน์โหลดแล้ว",new ,)
    }
    toString() {
        return `Certificate[certificateId=${this.certificateId}, content=${this.content},issuer=${this.issuer},signature=${this.signature},template=${this.template}]`;
    }
}
exports.Certificate = Certificate;
