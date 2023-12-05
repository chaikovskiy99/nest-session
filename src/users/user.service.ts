import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";


@Injectable()
export class UserService {

   public users: User[] = [
        {
            username: "admin",
            password: "admin",
            email: "admin@gmail.com"
        },
        {
            username: "user1",
            password: "user1",
            email: "user1@gmail.com"
        },
        {
            username: "user2",
            password: "user2",
            email: "user2@gmail.com"
        }
   ]

   getUserByName(name: string){
    return this.users.find(u => u.username === name)
   }

}