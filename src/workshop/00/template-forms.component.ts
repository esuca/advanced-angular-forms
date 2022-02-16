import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "template-forms-zero",
  template: `
    <h2>Reactive forms -- 0</h2>
    <form>
      <label for="email">Email</label>
      <input id="email" name="email" [(ngModel)]="model.email">

      <label for="password">Password</label>
      <input id="password" name="password" [(ngModel)]="model.password">

      <button type="submit" (click)="logFormValues()">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormsComponent {
  model = {
    email: '',
    password: ''
  }

  logFormValues() {
    console.log(this.model);
  }
}
