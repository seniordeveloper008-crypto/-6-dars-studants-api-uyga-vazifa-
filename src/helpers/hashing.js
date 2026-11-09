import bcrypt from "bcrypt"

const SALT = 10 

async function hashingPassword(password) {
    return await bcrypt.hash(password,SALT)
}

async function comparePassword(password,hashPassword) {
    return await bcrypt.compare(password,hashPassword)
}

export{
    hashingPassword,comparePassword
}