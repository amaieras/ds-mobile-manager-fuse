import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

// import { SharedModule } from 'app/shared/shared.module';
import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { FuseMainModule } from './main/main.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppStoreModule } from './store/store.module';
import { MaterialModule } from '@fuse/modules/material.module';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/content/apps/apps.module#FuseAppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/content/pages/pages.module#FusePagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/content/ui/ui.module#FuseUIModule'
    },
    {
        path        : 'services',
        loadChildren: './main/content/services/services.module#FuseServicesModule'
    },
    {
        path        : 'components',
        loadChildren: './main/content/components/components.module#FuseComponentsModule'
    },
    {
        path        : 'components-third-party',
        loadChildren: './main/content/components-third-party/components-third-party.module#FuseComponentsThirdPartyModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

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
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // SharedModule,
        MaterialModule,

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,

        AppStoreModule,
        FuseMainModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
