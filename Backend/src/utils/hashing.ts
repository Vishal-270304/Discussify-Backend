import * as bcrypt from "bcrypt";

const hashedData = async (password:string) : Promise<string> =>{
    const saltRounds = 10;
    return bcrypt.hash(password,saltRounds)
}

export default hashedData