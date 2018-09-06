import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { PartsComponent } from "./parts.component";

const routes: Routes = [
    {
        path     : "parts",
        component: PartsComponent
    }
];
@NgModule({
    declarations: [
        PartsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

    ],
    providers   : [
    ]
})
export class PartsModule { }
