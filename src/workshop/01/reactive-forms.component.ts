import { ChangeDetectionStrategy, Component } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "reactive-forms-one",
  template: `
    <h2>Reactive forms -- 01</h2>
    <form [formGroup]="form">
      <label for="email">Email</label>
      <input id="email" name="email" formControlName="email">

      <label for="password">Password</label>
      <input id="password" name="password" formControlName="password">

      <button type="submit" (click)="logFormValues()">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormsComponent {
  form = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  logFormValues() {
    console.log('is form valid', this.form.valid)
    console.log('form values', this.form.value);
  }
}
