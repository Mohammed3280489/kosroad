export interface Data {
  id: number;
  name: string;
  parent_id?: any;
  created_at: Date;
}

export interface Paginations {
  count: number;
  current_page: number;
  last_page: number;
  next_page?: any;
  per_page: number;
  total: number;
}

export interface Type_Res {
  data: Data[];
  message: string;
  status: boolean;
  code: number;
  pagination: Paginations;
}

export interface Type_Req {
  name_ar: string;
  name_en: string;
  name_ge: string;
  _method?:string
}



export interface Company_ById {
  data: Data;
  message: string;
  status: boolean;
  code: number;
  pagination?: any;
}

export interface Delete_Company_Type {
  data: boolean;
  message: string;
  status: boolean;
  code: number;
  pagination?: any;
}
