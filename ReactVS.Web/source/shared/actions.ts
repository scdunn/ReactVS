export interface IAction<T, P> {
    type: T
    data?: P
}