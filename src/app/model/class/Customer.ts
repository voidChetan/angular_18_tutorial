export class Customer {
    custId: number;
    name: string;
    mobile: string;
    emailid?: string;
    address?: string;

    constructor() {
        this.custId = 0;
        this.name = '';
        this.mobile = "";
    }
}

export class Department {
    departmentId: number;
    departmentName: string;
    departmentLogo: string;

    constructor() {
        this.departmentId = 0;
        this.departmentName = "";
        this.departmentLogo = "";
    } 
}

export interface IDepartmentList {
    departmentId: number,
    departmentName: string,
    departmentLogo: string
}