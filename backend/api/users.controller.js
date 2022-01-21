import UsersDao from "../dao/usersDAO.js"
import BSON from "bson"

const ObjectId = BSON.ObjectID

export default class UsersController{
    static async apiPostUser(req,res,next){
        try{
            const usersId = req.body.users_id
            const description = req.body.text
            const userInfo = {
                name:req.body.name,

            }
            const date = new Date()

            const UsersResponse = await UsersDao.addUser(
                ObjectId(usersId),
                userInfo,
                description,
                date
            )
            res.json({status:"Success"})
        }catch (e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiGetUsers(req,res,next){
        const usersPerPage = req.query.usersPerPage ? parseInt(req.usersPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page,10):0

        const filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        
        const {userList,totalNumUsers} = await UsersDao.getUsers({
            filters,
            page,
            usersPerPage
        })
        let response = {
            users: userList,
            page: page,
            entries_per_page:usersPerPage,
            total_results:totalNumUsers,
            filters:filters

        }
        res.json(response)
    }
}