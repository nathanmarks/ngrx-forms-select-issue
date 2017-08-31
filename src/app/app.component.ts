import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs/Observable';

import { MyFormValue, State } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formState$: Observable<FormGroupState<MyFormValue>>;

  options = [
    { value: 'foo', label: 'FOO' },
    { value: 'bar', label: 'BAR' },
  ];

  constructor(private store: Store<State>) {
    this.formState$ = store.select(s => s.app.myForm);
  }
}
