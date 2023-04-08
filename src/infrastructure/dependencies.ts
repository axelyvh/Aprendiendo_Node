import { WelcomeEmailSenderApplication } from "../application/useCases/welcomeEmailSenderApplication";
import { FakeEmailSender } from "./services/fake-email-sender";
import { InMemoryUserRepository } from "./repositories/in-memory-user-repository";
import { UserController } from "./http/controllers/user-controller";

import * as awilix from "awilix";

const container = awilix.createContainer();

container.register({
    userRepository: awilix.asClass(InMemoryUserRepository),
    emailSender: awilix.asClass(FakeEmailSender),

    welcomeEmailSenderApplication: awilix.asClass(WelcomeEmailSenderApplication),
    userController: awilix.asClass(UserController),
});

export const welcomeEmailSenderApplication = container.resolve("welcomeEmailSenderApplication");
export const userController = container.resolve("userController");