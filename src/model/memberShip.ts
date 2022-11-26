

    export interface Feature {
        id: number;
        membership_type: string;
        type: string;
        value: string;
    }

  

    export interface Pagination {
        count: number;
        current_page: number;
        last_page: number;
        next_page?: any;
        per_page: number;
        total: number;
    }

    export interface Data {
        id: number;
        name: string;
        description: string;
        price: number;
        active_period: string;
        features: Feature[];
    }


    export interface MemberShip_Req {
        name_ar: string;
        name_en: string;
        name_ge: string;
        description_ar:string;
        description_en:string;
        description_ge:string;
        price:number;
        active_period: string;
        _method?:string
      }

    export interface MemberShip_Res {
        data: Data[];
        message: string;
        status: boolean;
        code: number;
        pagination: Pagination;
    }

    export interface MemberShip_By_Id {
        data: Data;
        message: string;
        status: boolean;
        code: number;
        pagination: Pagination;
    }










