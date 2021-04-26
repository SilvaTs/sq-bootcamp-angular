import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/services/models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-lista-de-tarefa',
  templateUrl: './lista-de-tarefa.component.html',
  styleUrls: ['./lista-de-tarefa.component.scss']
})
export class ListaDeTarefaComponent implements OnInit {

  listarTodasTarefas: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks()
    .subscribe(
      () => {
        this.init();
      }
    );

    this.init();
  }


  private init() {
    this.tasklist();

  }

  private tasklist() {
    this.taskService
    .listAllTask()
    .subscribe(
      (tarefas: Task[]) => {
        this.listarTodasTarefas = tarefas;
      }
    );
  }

}
