import { Component } from '@angular/core';
import { Model, ToDoItem } from './model.es6';

@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
    model = new Model();
    getName() {
        return this.model.user;
    }

    getToDoItems() {
        return this.model.items.filter(item => !item.done);
    }
    addItem(value: string): void {
        if (value != "") {
            this.model.items.push(new ToDoItem(value, false));
        }

    }

}