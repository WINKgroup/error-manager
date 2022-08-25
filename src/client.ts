export default class ErrorManagerClient {
    public(e:unknown) {
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