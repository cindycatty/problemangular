import { Component } from "@angular/core";

@Component({
    selector: "app-camping-invoer",
    templateUrl: "./campinginvoer.component.html",
})

export class CampingInvoerComponent {
    InvoerCampingNaam = '';


    onCreateCamping() {
        console.log("Created a camping: " + this.InvoerCampingNaam);
        this.InvoerCampingNaam = '';
    }
}