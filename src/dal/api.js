import axios from "axios";

export let arrFlowers = []
 console.log(arrFlowers)
export const instance = axios.create({
    baseURL: `/api`,
})
export const authApi = {
    logout(){ return instance
        .get(`/flowers`)
        .then((response) => arrFlowers.push(response.data.flowers))},
}
