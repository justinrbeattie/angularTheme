import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { TreoAutogrowModule } from '@treo/directives/autogrow';
import { TreoCardModule } from '@treo/components/card';
import { TreoDateRangeModule } from '@treo/components/date-range';
import { TreoDrawerModule } from '@treo/components/drawer';
import { TreoHighlightModule } from '@treo/components/highlight';
import { TreoMessageModule } from '@treo/components/message';
import { SharedModule } from 'app/shared/shared.module';
import { AnimationsComponent } from 'app/modules/docs/treo/animations/animations.component';
import { HelpersComponent } from 'app/modules/docs/treo/helpers/helpers.component';
import { MockApiComponent } from 'app/modules/docs/treo/mock-api/mock-api.component';
import { ValidatorsComponent } from 'app/modules/docs/treo/validators/validators.component';
import { CardComponent } from 'app/modules/docs/treo/components/card/card.component';
import { DateRangeComponent } from 'app/modules/docs/treo/components/date-range/date-range.component';
import { DrawerComponent } from 'app/modules/docs/treo/components/drawer/drawer.component';
import { HighlightComponent } from 'app/modules/docs/treo/components/highlight/highlight.component';
import { MessageComponent } from 'app/modules/docs/treo/components/message/message.component';
import { NavigationComponent } from 'app/modules/docs/treo/components/navigation/navigation.component';
import { AutogrowComponent } from 'app/modules/docs/treo/directives/autogrow/autogrow.component';
import { ScrollbarComponent } from 'app/modules/docs/treo/directives/scrollbar/scrollbar.component';
import { ConfigComponent } from 'app/modules/docs/treo/services/config/config.component';
import { SplashScreenComponent } from 'app/modules/docs/treo/services/splash-screen/splash-screen.component';
import { MediaWatcherComponent } from 'app/modules/docs/treo/services/media-watcher/media-watcher.component';
import { FindByKeyComponent } from 'app/modules/docs/treo/pipes/find-by-key/find-by-key.component';

export const treoRoutes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'animations'
    },
    {
        path     : 'animations',
        component: AnimationsComponent
    },
    {
        path     : 'helpers',
        component: HelpersComponent
    },
    {
        path     : 'mock-api',
        component: MockApiComponent
    },
    {
        path     : 'validators',
        component: ValidatorsComponent
    },
    {
        path    : 'components',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'card'
            },
            {
                path     : 'card',
                component: CardComponent
            },
            {
                path     : 'date-range',
                component: DateRangeComponent
            },
            {
                path     : 'drawer',
                component: DrawerComponent
            },
            {
                path     : 'highlight',
                component: HighlightComponent
            },
            {
                path     : 'message',
                component: MessageComponent
            },
            {
                path     : 'navigation',
                component: NavigationComponent
            }
        ]
    },
    {
        path    : 'directives',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'autogrow'
            },
            {
                path     : 'autogrow',
                component: AutogrowComponent
            },
            {
                path     : 'scrollbar',
                component: ScrollbarComponent
            }
        ]
    },
    {
        path    : 'services',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'config'
            },
            {
                path     : 'config',
                component: ConfigComponent
            },
            {
                path     : 'splash-screen',
                component: SplashScreenComponent
            },
            {
                path     : 'media-watcher',
                component: MediaWatcherComponent
            }
        ]
    },
    {
        path    : 'pipes',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'find-by-key'
            },
            {
                path     : 'find-by-key',
                component: FindByKeyComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        AnimationsComponent,
        HelpersComponent,
        MockApiComponent,
        ValidatorsComponent,
        CardComponent,
        DateRangeComponent,
        DrawerComponent,
        HighlightComponent,
        MessageComponent,
        NavigationComponent,
        AutogrowComponent,
        ScrollbarComponent,
        ConfigComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent
    ],
    imports     : [
        RouterModule.forChild(treoRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        MatTabsModule,
        MarkdownModule.forChild(),
        TreoAutogrowModule,
        TreoCardModule,
        TreoDateRangeModule,
        TreoDrawerModule,
        TreoHighlightModule,
        TreoMessageModule,
        SharedModule
    ]
})
export class TreoModule
{
}
