import { Component } from "@angular/core";

@Component({
    selector: 'app-camping',
    templateUrl: './camping.component.html',
})
export class CampingComponent {
    @Input()
    campingList: string[] = [];
}