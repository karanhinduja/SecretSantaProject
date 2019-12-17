export interface Registration {
    PSNo: string;
    FullName: string;
    Mobile: number;
    Email: string;
    Department: string;
    Password: string;
}

export interface RegistrationApiModel {

    name: string,
    id: string,
    deptId: string,
    mobile: string,
    email: string,
    password: string
}