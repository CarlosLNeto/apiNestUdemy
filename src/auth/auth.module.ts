import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";


@Module({
    imports: [
        JwtModule.register({
        secret: "tPy,;h^/V5=-nvYxE2<Mp]`CwT*bed8k"
        }),
        UserModule
    ],
    controllers: [AuthController]

})
export class AuthModule{

}