import http from "../http-common";

class UsersDataService {
    getAll(page =0){
        return http.get(`?page=${page}`);
    }
    get(id){
        return http.get(`/id/${id}`)
    }
    find(query, by = "name" , page = 0){
        return http.get(`?${by}=${query}&page=${page}`)
    }
    createUser(data){
        return http.post("/",data)
    }
    deleteUser(id){
        return http.delete(`'user?id=${id}`)
    }
}

export default new UsersDataService();