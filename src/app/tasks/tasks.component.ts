import { Component, Input } from '@angular/core'
import { TaskComponent } from './task/task.component'
import { NgFor, NgIf } from '@angular/common'
import { NewTaskComponent } from './new-task/new-task.component'
import { TasksService } from './task/tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string

  constructor(private tasksService: TasksService) {}

  isAddingTask = false

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false
  }
}
