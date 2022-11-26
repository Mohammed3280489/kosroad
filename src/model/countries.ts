export interface Data {
    id: number;
    name: string;
    parent?: any;
    slug:string;
    created:string;

  }
  
  export interface Paginations {
    count: number;
    current_page: number;
    last_page: number;
    next_page?: any;
    per_page: number;
    total: number;
  }
  
  export interface Countries_Res {
    data: Data[];
    message: string;
    status: boolean;
    code: number;
    pagination: Paginations;
  }
  
  export interface Countries_Req {
    name: string;
    slug:string;
    _method?:string
  }
  
  
  
  export interface CountriesId {
    data: Data;
    message: string;
    status: boolean;
    code: number;
    pagination?: any;
  }
  
  export interface Delete_Countries {
    data: boolean;
    message: string;
    status: boolean;
    code: number;
    pagination?: any;
  }
  