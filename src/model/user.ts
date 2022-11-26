
export interface Login_Req {
   name :string;
   email:string;
}


    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        full_name: string;
        email: string;
    }

    export interface User_Data {
        user: User;
        token: string;
    }

    export interface Login_Res {
        data: User_Data;
        message: string;
        status: boolean;
        code: number;
        pagination?: any;
    }



