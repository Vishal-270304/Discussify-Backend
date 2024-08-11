import { Request, Response } from "express"
import Doubts from "../interfaces/Doubts"
import { doubtModel } from "../models/doubtsModel"

const PostADoubt = async (req: Request<{}, {}, Doubts>, res: Response) => {

    try {
        const { title, desc, doubtCategory, doubtSubCategory, doubtDate } = req.body

        const newDoubt = new doubtModel({
            title,
            desc,
            doubtCategory,
            doubtSubCategory,
            doubtDate: new Date(doubtDate)
        })

        await newDoubt.save()

        res.send(`Title: ${title} Description: ${desc} Doubt Category: ${doubtCategory} Doubt Sub Category: ${doubtSubCategory} Doubt Date: ${doubtDate}`)

    } catch (error) {
        res.status(500).send(error)
    }


}

export default PostADoubt