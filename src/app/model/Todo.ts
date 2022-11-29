export class Todo {

  constructor(
    public id: number,
    public task: string,
    public status: TodStatus = 'simple'
    ) {
  }
}



export type TodStatus = 'simple' | 'important' | 'completed';
