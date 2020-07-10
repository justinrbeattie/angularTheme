import { NgModule } from '@angular/core';
import { TreoDrawerModule } from '@treo/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { ClassicLayoutModule } from 'app/layout/layouts/classic/classic.module';
import { SharedModule } from 'app/shared/shared.module';

const modules = [
    EmptyLayoutModule,
    ClassicLayoutModule
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        SharedModule,
        ...modules
    ],
    exports     : [
        ...modules
    ]
})
export class LayoutModule
{
}
