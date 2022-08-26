export interface ErrorManagerResult {
    status: 'warn' | 'error'
    message: string
}

export default class ErrorManager {
    e?:unknown

    constructor (e?:unknown) {
        this.e = e
    }

    get(e?:unknown) {
        if (!e) e = this.e
        console.error(e)
        let error:ErrorManagerResult = {
            status: 'error',
            message: 'internal error'
        }

        if (e instanceof Error) {
            switch( e.name ) {
                case 'MongoError':
                    if (e.message.indexOf('duplicate key') !== -1) error.message = 'duplication'
                    break
            }
        }
        else if(typeof e === 'string')
            error.message = e

        return error
    }

    static get(e:unknown) {
        const errorManager = new ErrorManager(e)
        return errorManager.get()
    }
}