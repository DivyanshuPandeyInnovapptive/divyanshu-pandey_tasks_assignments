import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TaskService){}

  ngOnInit() {
    this.tasksService.getTasks().subscribe(res => {
      console.log(res);
      this.tasks = res.data.todos
    });
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t._id !== task._id));
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.toggleTask(task).subscribe();
  }

  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((res) => this.tasks = [...this.tasks, res.data.todo]);
  }
}
