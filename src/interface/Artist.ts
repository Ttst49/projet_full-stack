export interface Artist{
    id:number,
    name:string,
    lastName:string,
    createdAt:Date,
    relatedTo:{
        id:number
        email:string
    }
}