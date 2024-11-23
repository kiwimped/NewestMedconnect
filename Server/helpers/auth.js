const bcrpyt = require('bcrypt')

const hashPassword = (password) =>{
    return new Promise((resolver,reject)=>{
        bcrpyt.genSalt(12,(err,salt)=>{
            if(err){
                reject(err)
            }
            bcrpyt.hash(password,salt,(err,hash)=>{
                if(err){
                    reject(err)
                }
                resolver(hash)
            })
        })
    })
}

const comparePassword = (password,hashed) =>{
    return bcrpyt.compare(password,hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}