
export interface IStudent {
    Id:number
    FirstName: string;
    LastName: string;
}

export namespace Store {
    
  export type Students = {items: IStudent[], newName:string, wasAdded:boolean }

  export type All = {
      students: Students

  }
}


