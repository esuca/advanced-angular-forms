import {ChangeDetectionStrategy, Component, NgModule} from "@angular/core";
import {TemplateFormsComponent} from "src/workshop/00/template-forms.component";
import {ReactiveFormsComponent} from "src/workshop/00/reactive-forms.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "exercise-zero",
  template: `
    <template-forms-zero></template-forms-zero>
    <reactive-forms-zero></reactive-forms-zero>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseZeroComponent {
  doSomething(on: boolean) {
    console.log(on)
  }
}


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExerciseZeroComponent
  ],
  declarations: [TemplateFormsComponent, ReactiveFormsComponent, ExerciseZeroComponent]
})
export class ExerciseZeroModule {}


