

    export interface Data {
        id: number;
        full_name: string;
        phone: string;
        email: string;
        company_type: string;
        is_approved: number;
        vendor_type: string;
        vendor_product_type: string;
        logo?: any;
        created_at: Date;
    }

    export interface Pagination {
        count: number;
        current_page: number;
        last_page: number;
        next_page?: any;
        per_page: number;
        total: number;
    }

    export interface Vendor_Res {
        data: Data[];
        message: string;
        status: boolean;
        code: number;
        pagination: Pagination;
    }


   

    export interface Vendor_Req {
        full_name: string;
        phone: string;
        email: string;
        company_type: string;
        is_approved: number;
        vendor_type: string;
        vendor_product_type: string;
        logo: any;
        created_at: Date;
        _method?:string
    }




    export interface Vendor_By_Id {
        data: Data;
        message: string;
        status: boolean;
        code: number;
        pagination: Pagination;
    }