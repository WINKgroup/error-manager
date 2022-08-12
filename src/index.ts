import express from "express"

export default class ErrorManager {
    static public(e:unknown) {
        console.error(e)
        let error:{[key: string]: any} = {
            status: 'error',
            message: 'internal error'
        }

        if (e instanceof Error) {
            if (e.name === 'MongoError') {
                error = JSON.parse( JSON.stringify(e) )
                delete error.name
                error.message = 'internal error'
                if (e.message.indexOf('duplicate key') !== -1) error.message = 'duplication'
            }
        }

        return error
    }

    static sender(e:unknown, res:express.Response) {
        const err = this.public(e)
        res.status(500).json(err)
    }
}