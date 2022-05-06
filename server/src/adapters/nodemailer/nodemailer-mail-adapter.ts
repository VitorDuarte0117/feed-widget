import { MailAdapter, sendMailData } from "../mail-adepter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5fca5b9c96dc5d",
        pass: "1f80fb510d9ba1",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Vitor Duarte <vitorduarte.vds7@gmail.com>",
            subject: subject,
            html: body,
        });
    }
}
