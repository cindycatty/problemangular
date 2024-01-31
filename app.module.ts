import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { CampingComponent } from "./camping.component";
import { CampingInvoerComponent} from "./campinginvoer.component";

@NgModule ({
    declarations: [
        AppComponent,
        CampingComponent,
        CampingInvoerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

