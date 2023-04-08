import { EmailSender } from "../services/email-sender";
import { IUserRepository } from "../repositories/iuser-repository";

export class WelcomeEmailSenderApplication {

    _userRepository;
    _emailSender;

    constructor(
        dependencies: {
            userRepository: IUserRepository,
            emailSender: EmailSender
        }
    )
    {
            this._userRepository = dependencies.userRepository;
            this._emailSender = dependencies.emailSender;
    }

    async run(userId: string){
        console.log("User", userId);
        const user = await this._userRepository.getById(userId);

        if(!user){
            throw new Error(`User id not found ${userId}`);
        }

        await this._emailSender.send(user.email, "Bienvenido a la aplicacion");

    }

}