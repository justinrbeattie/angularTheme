import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreoHighlightModule } from '@treo/components/highlight';
import { TreoMessageModule } from '@treo/components/message';
import { SharedModule } from 'app/shared/shared.module';
import { ApexChartsComponent } from 'app/modules/docs/supported-components/apex-charts/apex-charts.component';
import { FullCalendarComponent } from 'app/modules/docs/supported-components/full-calendar/full-calendar.component';
import { NgxMarkdownComponent } from 'app/modules/docs/supported-components/ngx-markdown/ngx-markdown.component';
import { QuillEditorComponent } from 'app/modules/docs/supported-components/quill-editor/quill-editor.component';

export const supportedComponentsRoutes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'apex-charts'
    },
    {
        path     : 'apex-charts',
        component: ApexChartsComponent
    },
    {
        path     : 'full-calendar',
        component: FullCalendarComponent
    },
    {
        path     : 'ngx-markdown',
        component: NgxMarkdownComponent
    },
    {
        path     : 'quill-editor',
        component: QuillEditorComponent
    }
];

@NgModule({
    declarations: [
        ApexChartsComponent,
        FullCalendarComponent,
        NgxMarkdownComponent,
        QuillEditorComponent
    ],
    imports     : [
        RouterModule.forChild(supportedComponentsRoutes),
        TreoHighlightModule,
        TreoMessageModule,
        SharedModule
    ]
})
export class SupportedComponentsModule
{
}
