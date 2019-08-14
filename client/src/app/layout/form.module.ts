import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routes } from '../app-routing.module';
import { LoanComponent } from './loan/loan.component';
import { SettlementComponent } from './settlement/settlement.component';


@NgModule({
    declarations: [
        LoanComponent,
        SettlementComponent

    ],
    imports: [
        SharedModule,
        RouterModule.forRoot([routes.NEWS_GROUP])
    ]
})
export class FormModule {
}
