import {ChangeDetectionStrategy, Component, NgModule} from "@angular/core";
import {ExerciseZeroModule} from "src/workshop/00";
import {ExerciseOneModule} from "src/workshop/01";

@Component({
  selector: "scratch",
  template: `
    <exercise-one></exercise-one>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScratchComponent {}

@NgModule({
  declarations: [ScratchComponent],
  exports: [
    ScratchComponent
  ],
  imports: [ExerciseZeroModule, ExerciseOneModule]
})
export class ScratchModule {}
