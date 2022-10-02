export class UserModel {
    public id: number;
    public lastName: string;
    public firstName: string;
    public emailAddress: string;
    public phoneNumber: string;
    public dateOfBirth: string | Date;
    public gender: string;
    public isActive: boolean;
}
