import {ChangeDetectionStrategy, Component, NgModule} from "@angular/core";
import { ExerciseZeroModule } from '../00';
import { ExerciseOneModule } from '../01';

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
