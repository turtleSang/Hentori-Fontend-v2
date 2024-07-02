export enum Role {
    Staff = "S",
    Manager = "M"
}

export type UserRequest = {
    username: string,
    password: string,
    role?: Role
}