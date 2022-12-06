export class TodoModel {

  constructor(
    public id: string,
    public task: string,
    public status: TodoStatus = 'simple'
    ) {
  }
}



export type TodoStatus = 'simple' | 'important' | 'completed';


export interface ITodoFilter {
  search: string;
  status: string;
}

//todo: change todo status to enum and find out how it works with creating todo from json file with http client
