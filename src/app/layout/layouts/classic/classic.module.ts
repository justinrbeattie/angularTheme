import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { TreoNavigationModule } from '@treo/components/navigation';
import { SharedModule } from 'app/shared/shared.module';
import { ClassicLayoutComponent } from 'app/layout/layouts/classic/classic.component';

@NgModule({
    declarations: [
        ClassicLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        TreoNavigationModule,
        SharedModule
    ],
    exports     : [
        ClassicLayoutComponent
    ]
})
export class ClassicLayoutModule
{
}
