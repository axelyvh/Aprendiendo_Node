import { EmailSender } from "../../application/services/email-sender";

export class FakeEmailSender implements EmailSender {
    async send(email: string, text: string): Promise<void> {
        console.log(`Simulating email to ${email}, text: ${text}`);
    }
}