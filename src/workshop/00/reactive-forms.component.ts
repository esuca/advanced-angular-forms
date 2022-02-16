import { ChangeDetectionStrategy, Component } from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "reactive-forms-zero",
  template: `
    <h2>Reactive forms -- 0</h2>
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
    email: new FormControl(""),
    password: new FormControl("")
  });

  logFormValues() {
    console.log(this.form.value);
  }
}
