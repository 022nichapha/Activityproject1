"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contificate = void 0;
class Contificate {
    constructor(contificateId, content, Issuer, signature, template) {
        this.contificateId = contificateId;
        this.content = content;
        this.Issuer = Issuer;
        this.signature = signature;
        this.template = template;
    }
    generateCertificate() {
        return new Certificate(this.CertificateId, this.content, this.Issuer, this.signature, this.template);
    }
    sendCertificateNotification() {
    }
    toString() {
        return 'User[certificateId=${this.certificateId},content=${this.content},Issuer=${this.Issuer},signature=${this.signature},template=${this.template}]';
    }
}
exports.Contificate = Contificate;
