import { Route } from '@angular/router';
import { InitialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Doc routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'classic'
        },
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [

            // Redirect to changelog
            {path: '', pathMatch: 'full', redirectTo: 'guides/changelog'},

            // Guides
            {path: 'guides', loadChildren: () => import('app/modules/docs/guides/guides.module').then(m => m.GuidesModule)},

            // Treo
            {path: 'treo', loadChildren: () => import('app/modules/docs/treo/treo.module').then(m => m.TreoModule)},

            // Custom components
            {path: 'custom-components', loadChildren: () => import('app/modules/docs/custom-components/custom-components.module').then(m => m.CustomComponentsModule)},

            // Supported components
            {path: 'supported-components', loadChildren: () => import('app/modules/docs/supported-components/supported-components.module').then(m => m.SupportedComponentsModule)},

            // Catch all
            {path: '**',  redirectTo: ''}
        ]
    }
];
