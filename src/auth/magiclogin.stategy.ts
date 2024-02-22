import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import Strategy from 'passport-magic-login'
import { AuthService } from "./auth.service";

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {

  private readonly logger = new Logger(MagicLoginStrategy.name)

  constructor(private authService: AuthService) {
    super({
      secret: process.env.MAGIC_LINK_SECRET,
      jwtOptions: {
        expiresIn: '5m'
      },
      callbackUrl: "http://localhost:3000/auth/login/callback",
      sendMagicLink: async (destination, href) => {
        // TODO: send email
        this.logger.debug(`sending email to ${destination} with link ${href}`)
      },
      verify: (payload, callback) => {
        // Get or create a user with the provided email from the database
        callback(null, this.validate(payload))
      }
    })
  }

  validate(payload: {destination: string}) {
    const user = this.authService.validateUser(payload.destination)
    return user
  }

}
