import {ChangeDetectionStrategy, Component, NgModule} from "@angular/core";
import {TemplateFormsComponent} from "src/workshop/01/template-forms.component";
import {ReactiveFormsComponent} from "src/workshop/01/reactive-forms.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "exercise-one",
  template: `
    <template-forms-one></template-forms-one>
    <reactive-forms-one></reactive-forms-one>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseOneComponent {}


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExerciseOneComponent
  ],
  declarations: [TemplateFormsComponent, ReactiveFormsComponent, ExerciseOneComponent]
})
export class ExerciseOneModule {}


