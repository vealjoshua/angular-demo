import { Injectable } from '@angular/core'
import { NewTask } from '../new-task/new-task.model'
import { Task } from './task.model'

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    }
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks')

    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId)
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.push({
      dueDate: newTask.date,
      id: new Date().getTime().toString(),
      summary: newTask.summary,
      title: newTask.title,
      userId: userId
    })
    this.saveTasks()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id)
    this.saveTasks()
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
