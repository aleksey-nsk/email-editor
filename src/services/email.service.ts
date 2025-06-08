import axios from "axios";
import {IEmail} from "../pages/home/types";

class EmailService {

    private URL = 'http://localhost:3000/emails'

    async getEmails() {
        const {data} = await axios.get<IEmail[]>(this.URL)
        console.log(`DB has ${data.length} emails`)
        return data
    }

    async sendEmail(text: string) {
        const {data} = await axios.post(this.URL, {
            text
        })
        console.log(`Email with id: "${data.id}" was sent`)
        return data
    }
}

export const emailService = new EmailService()
