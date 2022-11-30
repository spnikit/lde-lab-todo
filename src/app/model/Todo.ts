export class Todo {

  constructor(
    public id: string,
    public task: string,
    public status: TodoStatus = 'simple'
    ) {
  }
}



export type TodoStatus = 'simple' | 'important' | 'completed';
