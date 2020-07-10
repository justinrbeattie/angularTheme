import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MarkdownModule } from 'ngx-markdown';
import { TreoHighlightModule } from '@treo/components/highlight';
import { TreoMessageModule } from '@treo/components/message';
import { SharedModule } from 'app/shared/shared.module';
import { ChangelogComponent } from 'app/modules/docs/guides/changelog/changelog';
import { IntroductionComponent } from 'app/modules/docs/guides/getting-started/introduction/introduction';
import { PrerequisitesComponent } from 'app/modules/docs/guides/getting-started/prerequisites/prerequisites';
import { InstallationComponent } from 'app/modules/docs/guides/getting-started/installation/installation';
import { ServingComponent } from 'app/modules/docs/guides/getting-started/serving/serving';
import { DirectoryStructureComponent } from 'app/modules/docs/guides/development/directory-structure/directory-structure';
import { ComponentStructureComponent } from 'app/modules/docs/guides/development/component-structure/component-structure';
import { StarterKitComponent } from 'app/modules/docs/guides/development/starter-kit/starter-kit';
import { DeploymentComponent } from 'app/modules/docs/guides/development/deployment/deployment';
import { UpdatingComponent } from 'app/modules/docs/guides/development/updating/updating';
import { ThemeLayoutsComponent } from 'app/modules/docs/guides/customization/theme-layouts/theme-layouts';
import { ContentLayoutsComponent } from 'app/modules/docs/guides/customization/content-layouts/content-layouts';
import { TailwindCSSComponent } from 'app/modules/docs/guides/customization/tailwindcss/tailwindcss';
import { ThemingComponent } from 'app/modules/docs/guides/customization/theming/theming';
import { SplashScreenCustomizationComponent } from 'app/modules/docs/guides/customization/splash-screen/splash-screen';
import { JwtComponent } from 'app/modules/docs/guides/authentication/jwt/jwt';

export const guidesRoutes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'changelog'
    },
    {
        path     : 'changelog',
        component: ChangelogComponent
    },
    {
        path    : 'getting-started',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'introduction'
            },
            {
                path     : 'introduction',
                component: IntroductionComponent
            },
            {
                path     : 'prerequisites',
                component: PrerequisitesComponent
            },
            {
                path     : 'installation',
                component: InstallationComponent
            },
            {
                path     : 'serving',
                component: ServingComponent
            }
        ]
    },
    {
        path    : 'development',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'structure'
            },
            {
                path     : 'directory-structure',
                component: DirectoryStructureComponent
            },
            {
                path     : 'component-structure',
                component: ComponentStructureComponent
            },
            {
                path     : 'starter-kit',
                component: StarterKitComponent
            },
            {
                path     : 'deployment',
                component: DeploymentComponent
            },
            {
                path     : 'updating',
                component: UpdatingComponent
            }
        ]
    },
    {
        path    : 'customization',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'theme-layouts'
            },
            {
                path     : 'theme-layouts',
                component: ThemeLayoutsComponent
            },
            {
                path     : 'content-layouts',
                component: ContentLayoutsComponent
            },
            {
                path     : 'tailwindcss',
                component: TailwindCSSComponent
            },
            {
                path     : 'theming',
                component: ThemingComponent
            },
            {
                path     : 'splash-screen',
                component: SplashScreenCustomizationComponent
            }
        ]
    },
    {
        path    : 'authentication',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'jwt'
            },
            {
                path     : 'jwt',
                component: JwtComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ChangelogComponent,
        IntroductionComponent,
        PrerequisitesComponent,
        InstallationComponent,
        ServingComponent,
        DirectoryStructureComponent,
        ComponentStructureComponent,
        StarterKitComponent,
        DeploymentComponent,
        UpdatingComponent,
        ThemeLayoutsComponent,
        ContentLayoutsComponent,
        TailwindCSSComponent,
        ThemingComponent,
        SplashScreenCustomizationComponent,
        JwtComponent
    ],
    imports     : [
        RouterModule.forChild(guidesRoutes),
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
        MarkdownModule.forChild(),
        TreoHighlightModule,
        TreoMessageModule,
        SharedModule
    ]
})
export class GuidesModule
{
}
