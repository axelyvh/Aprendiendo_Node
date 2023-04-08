import { Request, Response } from "express";
import { WelcomeEmailSenderApplication } from "../../../application/useCases/welcomeEmailSenderApplication";

export class UserController {

  _welcomeEmailSenderApplication;

  constructor(
    dependencies: {
      welcomeEmailSenderApplication: WelcomeEmailSenderApplication
    }
  )
  {
    this._welcomeEmailSenderApplication = dependencies.welcomeEmailSenderApplication;
  }

  async run(req: Request, res: Response) {
    const userId = req.params.id;
    await this._welcomeEmailSenderApplication.run(userId);
    res.status(200).send();
  }

}
