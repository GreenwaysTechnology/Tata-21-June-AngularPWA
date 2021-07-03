import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeComponent } from './attribute.component';
import { GreeterpropComponent } from './greeterprop.component';
import { TodoContainerComponent } from './todo-container.component';
import { TodoPresentationComponent } from './todo-presentation.component';
import { TodoAppComponent } from './todo-app.component';



@NgModule({
  declarations: [
    AttributeComponent,
    GreeterpropComponent,
    TodoContainerComponent,
    TodoPresentationComponent,
    TodoAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttributeComponent,
    GreeterpropComponent,
    TodoContainerComponent,
    TodoPresentationComponent,
    TodoAppComponent
  ]
})
export class PropertybindingModule { }
