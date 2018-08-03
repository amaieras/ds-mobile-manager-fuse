import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatAutocomplete, MatAutocompleteModule,
    MatButtonModule, MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { EcommerceDashboardComponent } from 'app/main/apps/e-commerce/dashboard/dashboard.component';
import { EcommerceDashboardService } from 'app/main/apps/e-commerce/dashboard/dashboard.service';
import { EcommerceProductsComponent } from 'app/main/apps/e-commerce/products/products.component';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { EcommerceProductComponent } from 'app/main/apps/e-commerce/product/product.component';
import { EcommerceProductService } from 'app/main/apps/e-commerce/product/product.service';
import { EcommerceOrdersComponent } from 'app/main/apps/e-commerce/orders/orders.component';
import { EcommerceOrdersService } from 'app/main/apps/e-commerce/orders/orders.service';
import { EcommerceOrderComponent } from 'app/main/apps/e-commerce/order/order.component';
import { EcommerceOrderService } from 'app/main/apps/e-commerce/order/order.service';
import {ClientsPFComponent} from '../clients/clients-pf/clients-pf.component';
import {ClientsPFService} from '../clients/clients-pf/clients-pf.service';
import {ClientPFComponent} from '../clients/client-pf/client.component';
import {ClientPFService} from '../clients/client-pf/client.service';
import {PhoneListComponent} from './shared/phone-list/phone-list.component';

const routes: Routes = [
    {
        path     : 'dashboard',
        component: EcommerceDashboardComponent,
        resolve  : {
            data: EcommerceDashboardService
        }
    },
    {
        path     : 'products',
        component: EcommerceProductsComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    },
    {
        path     : 'clients-pf',
        component: ClientsPFComponent,
        resolve  : {
            data: ClientsPFService
        }
    },
    {
        path     : 'clients-pf/:id',
        component: ClientPFComponent,
        resolve  : {
            data: ClientPFService
        }
    }
];

@NgModule({
    declarations: [
        EcommerceDashboardComponent,
        EcommerceProductsComponent,
        PhoneListComponent,
        ClientsPFComponent,
        ClientPFComponent,
        EcommerceProductComponent,
        EcommerceOrdersComponent,
        EcommerceOrderComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatCardModule,
        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule,
    ],
    providers   : [
        ClientsPFService,
        ClientPFService
    ]
})
export class ClientsModule
{
}
