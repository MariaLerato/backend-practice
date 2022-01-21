import http from "../http-common";

class UsersDataService {
    getAll(page =0){
        return http.get(`?page=${page}`);
    }
    find(query, by = "name" , page = 0){
        return http.get(`?${by}=${query}&page=${page}`)
    }
    createUser(data){
        return http.post("/",data)
    }
}

export default new UsersDataService();