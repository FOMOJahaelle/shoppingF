import { Course } from "../course/course";

export class User {
    id!: number;
    username!: string;
     password!: string;
     role!:string;
     course!: Course[];
}
