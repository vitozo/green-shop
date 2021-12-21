import axios from "axios";

export const instance = axios.create({
    baseURL: `/api`,
})
export const authApi = {
    logout(){ return instance
        .get(`/flowers`)
        .then((response) => {
            console.log(response)
            return response.data.flowers
        })},
}

