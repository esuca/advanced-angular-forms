import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "template-forms-one",
  template: `
    <h2>Template forms -- 01</h2>
    <form>
      <label for="email">Email</label>
      <input id="email" name="email" required [(ngModel)]="model.email">

      <label for="password">Password</label>
      <input id="password" name="password" required [(ngModel)]="model.password">

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
    console.log('is form valid')
    console.log('form values',this.model);
  }
}
