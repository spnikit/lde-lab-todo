import {Component, EventEmitter, Output} from '@angular/core';
import {NgModel} from "@angular/forms";
import {TodoStatus} from "../../model/Todo";


@Component({
  selector: 'lde-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.scss']
})
export class SearchTodoComponent {
  @Output() filter = new EventEmitter<{ search: string, status: string }>();

  statuses: (TodoStatus | 'все')[] = [
    'simple',
    'important',
    'completed',
    'все'
  ]

  handleSearchClick(search: NgModel, status: NgModel) {
    this.filter.emit({search: search.value, status: status.value});
    search.reset();
  }

  handleResetClick(search: NgModel, status: NgModel) {
    this.filter.emit({search: '', status: ''});
    status.reset();
    search.reset();
  }

}
