import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreoHighlightModule } from '@treo/components/highlight';
import { TreoMessageModule } from '@treo/components/message';
import { SharedModule } from 'app/shared/shared.module';
import { OverviewComponent } from 'app/modules/docs/custom-components/overview/overview.component';
import { MessagesComponent } from 'app/modules/docs/custom-components/messages/messages.component';
import { NotificationsComponent } from 'app/modules/docs/custom-components/notifications/notifications.component';
import { SearchComponent } from 'app/modules/docs/custom-components/search/search.component';
import { ShortcutsComponent } from 'app/modules/docs/custom-components/shortcuts/shortcuts.component';
import { UserComponent } from 'app/modules/docs/custom-components/user/user.component';

export const customComponentsRoutes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'overview'
    },
    {
        path     : 'overview',
        component: OverviewComponent
    },
    {
        path     : 'messages',
        component: MessagesComponent
    },
    {
        path     : 'notifications',
        component: NotificationsComponent
    },
    {
        path     : 'search',
        component: SearchComponent
    },
    {
        path     : 'shortcuts',
        component: ShortcutsComponent
    },
    {
        path     : 'user',
        component: UserComponent
    }
];

@NgModule({
    declarations: [
        OverviewComponent,
        MessagesComponent,
        NotificationsComponent,
        SearchComponent,
        ShortcutsComponent,
        UserComponent
    ],
    imports     : [
        RouterModule.forChild(customComponentsRoutes),
        TreoHighlightModule,
        TreoMessageModule,
        SharedModule
    ]
})
export class CustomComponentsModule
{
}
