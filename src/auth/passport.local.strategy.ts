import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/user.entity";
import { UserService } from "src/users/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy){
    constructor(private service : UserService){
        super()
    }

    async validate(username: string, passport: string) : Promise<any>{
        // fetch user from database if it exists, otherwise throw error immediately.
        const user = this.service.getUserByName(username);
        if(user === undefined) throw new UnauthorizedException();

        // if we found the user in database, return the user
        if(user.password === passport)
        var {password, ...rest} = user // we don't want to return password in payload
        return rest
    }
}