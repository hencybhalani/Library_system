export interface userregister{
    id?:number;
    username?:string;
    email:string;
    phone?:string;
    department? :string;
    password:string;
    userType?:UserType;
    accountStatus?:AccountStatus;
    createdOn?:string;

}
export enum AccountStatus {
    UNAPPROVED,
    ACTIVE,
    BLOCKED
}

export enum UserType{
    ADMIN,
    STUDENT,
    
}
