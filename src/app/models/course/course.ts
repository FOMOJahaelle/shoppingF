import { Taches } from "../taches/taches";

export class Course {

    id!: number;
    name!: string;
     description!: string;
     date!:Date;
     archive!: boolean;
     taches!: Taches[];
}
