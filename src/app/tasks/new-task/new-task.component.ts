import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NewTask } from './new-task.model'
import { TasksService } from '../task/tasks.service'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string
  @Output() close = new EventEmitter<void>()
  enteredTitle = signal('')
  enteredSummary = ''
  enteredDate = ''
  private tasksService = inject(TasksService)

  onCloseTask() {
    this.close.emit()
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        date: this.enteredDate,
        summary: this.enteredSummary,
        title: this.enteredTitle()
      },
      this.userId
    )
    this.close.emit()
  }
}
