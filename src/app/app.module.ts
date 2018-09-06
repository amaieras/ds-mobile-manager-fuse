import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { FakeDbService } from "app/fake-db/fake-db.service";
import { AppComponent } from "app/app.component";
import { AppStoreModule } from "app/store/store.module";
import { LayoutModule } from "app/layout/layout.module";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFirestore} from "angularfire2/firestore";

const appRoutes: Routes = [
    {
        path        : "apps",
        loadChildren: "./main/apps/apps.module#AppsModule"
    },
    {
        path        : "pages",
        loadChildren: "./main/pages/pages.module#PagesModule"
    },
    {
        path        : "ui",
        loadChildren: "./main/ui/ui.module#UIModule"
    },
    {
        path        : "documentation",
        loadChildren: "./main/documentation/documentation.module#DocumentationModule"
    },
    {
        path        : "angular-material-elements",
        loadChildren: "./main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule"
    },
    {
        path      : "**",
        redirectTo: "apps/dashboards/analytics"
    }
];

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,

        // Firebase
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [AngularFirestore],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
