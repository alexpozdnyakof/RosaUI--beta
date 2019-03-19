

export interface User {
    id: string;
    name: string;
    email?: string;
    rb?: string;
    avatar?: string;
    permissions?: string[];
    roles?: string[];
}


export class InitialUserState {
    static create(): Partial<User> {
        return {
            id: '',
            name: '',
            email: '',
            rb: '',
            avatar: '',
            permissions: [],
            roles: [],
         };
    }
}
