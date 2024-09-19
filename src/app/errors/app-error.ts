// creat custom AppError
class AppError extends Error {
    private status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;

        // stack trace of the error
        Error.captureStackTrace(this, this.constructor);
    }

    // stack trace getter method
    get stackTraceValue() {
        return this.stack;
    }

    // status getter method
    get statusValue() {
        return this.status;
    }
}

export default AppError;