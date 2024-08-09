export interface IAppointment{
    id: number,
    date: Date,
    time: Date,
    userId: number,
    status: Status,
}
export const enum Status{
    active ='Activo',
    cancelled ='Cancelled'
}
