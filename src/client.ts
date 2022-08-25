export default class ErrorManagerClient {
    e?:unknown

    costructor (e?:unknown) {
        this.e = e
    }

    public(e?:unknown) {
        if (!e) e = this.e
        console.error(e)
        let error:{[key: string]: any} = {
            status: 'error',
            message: 'internal error'
        }

        if (e instanceof Error)
            error.message = e.message
        else if (typeof e === 'string')
            error.message = e

        return error
    }
}