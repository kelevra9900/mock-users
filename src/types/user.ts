export type QueryOptions = {
    page?: number;
    per_page?: number;
    search?: string;
}

export type Users = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: Support;
}


export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type Support = {
    url: string;
    text: string;
}
