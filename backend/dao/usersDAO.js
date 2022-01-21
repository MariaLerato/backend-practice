import  mongodb from "mongodb";

const ObjectId = mongodb.ObjectId

let users

export default class UsersDao{
    static async injectDB(conn){
        if(users){
            return
        }
        try{
            users = await conn.db(process.env.Connection).collection("UserClient")
        }
        catch(e){
            console.log(`Unable to establish collection handles in userDao: ${e}`)
        }
    }
    static async addUser(usersId,user,description,date){
        try{
            const userDoc = {
                name : user.name,
                user_id:usersId,
                date:date,
                text:description,
               
            }
            return await users.insertOne(userDoc)
        }
        catch (e){
            console.error(`Unable to post review : ${e}`)
        }
    }
    static async getUsers({
        filters=null,
        page = 0,
        usersPerPage = 10,

    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = { $text:{ $search: filters["name"]}}
            }
        }
        let cursor
        try{
            cursor = await users
             .find(query)
        } catch (e){
            console.log(`Unable to issue or find a command, ${e}`)
            return {userList:[],totalNumUsers:0}
        }
        const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page)
        try{
            const userList = await displayCursor.toArray()
            const totalNumUsers = await users.countDocuments(query)
            return {userList,totalNumUsers}
        }
        catch (e){
            console.log(`Unable to convert cursor to array, ${e}`)
            return {userList:[],totalNumUsers:0}
        }

    }
}