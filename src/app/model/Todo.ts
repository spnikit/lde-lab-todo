export class Todo {

  constructor(
    public id: number,
    public task: string,
    public status: TodoStatus = 'simple'
    ) {
  }
}



export type TodoStatus = 'simple' | 'important' | 'completed';
