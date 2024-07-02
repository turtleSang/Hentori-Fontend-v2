export type userRequest = {
    username: string,
    password: string
}

const rootUrl = "http://localhost:8080/api";

export const loginUrl = `${rootUrl}/admin/login`;