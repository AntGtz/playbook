const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, 'Sin bio')
    }
    static getInfo(user){
        let info = [user.id, user.username, user.name, user.bio]
        return info
    }
    static updateUserUsername(element, newName){
        element.username= newName
        return newName
    }
    static getAllUsernames(names){
        let users=[names[0].username, names[1].username, names[2].username]
        return users
    }
}
module.exports = UserService