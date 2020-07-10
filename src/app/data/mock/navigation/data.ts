/* tslint:disable:max-line-length */
import { TreoNavigationItem } from '@treo/components/navigation';

export const defaultNavigation: TreoNavigationItem[] = [
    {
        id      : 'guides',
        title   : 'Guides',
        subtitle: 'Everything you need to get started',
        type    : 'group',
        icon    : 'import_contacts',
        children: [
            {
                id   : 'guides.changelog',
                title: 'Changelog',
                type : 'basic',
                icon : 'update',
                link : '/guides/changelog',
                badge: {
                    title     : '1.0.2',
                    style     : 'rounded',
                    background: '#FFEB3B',
                    color     : '#000000'
                }
            },
            {
                id      : 'guides.getting-started',
                title   : 'Getting started',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.getting-started.introduction',
                        title: 'Introduction',
                        type : 'basic',
                        link : '/guides/getting-started/introduction'
                    },
                    {
                        id   : 'guides.getting-started.prerequisites',
                        title: 'Prerequisites',
                        type : 'basic',
                        link : '/guides/getting-started/prerequisites'
                    },
                    {
                        id   : 'guides.getting-started.installation',
                        title: 'Installation',
                        type : 'basic',
                        link : '/guides/getting-started/installation'
                    },
                    {
                        id   : 'guides.getting-started.serving',
                        title: 'Serving',
                        type : 'basic',
                        link : '/guides/getting-started/serving'
                    }
                ]
            },
            {
                id      : 'guides.development',
                title   : 'Development',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.development.directory-structure',
                        title: 'Directory structure',
                        type : 'basic',
                        link : '/guides/development/directory-structure'
                    },
                    {
                        id   : 'guides.development.component-structure',
                        title: 'Component structure',
                        type : 'basic',
                        link : '/guides/development/component-structure'
                    },
                    {
                        id   : 'guides.development.starter-kit',
                        title: 'Starter kit',
                        type : 'basic',
                        link : '/guides/development/starter-kit'
                    },
                    {
                        id   : 'guides.development.deployment',
                        title: 'Deployment',
                        type : 'basic',
                        link : '/guides/development/deployment'
                    },
                    {
                        id   : 'guides.development.updating',
                        title: 'Updating',
                        type : 'basic',
                        link : '/guides/development/updating'
                    }
                ]
            },
            {
                id      : 'guides.customization',
                title   : 'Customization',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.customization.theme-layouts',
                        title: 'Theme layouts',
                        type : 'basic',
                        link : '/guides/customization/theme-layouts'
                    },
                    {
                        id   : 'guides.customization.content-layouts',
                        title: 'Content layouts',
                        type : 'basic',
                        link : '/guides/customization/content-layouts'
                    },
                    {
                        id   : 'guides.customization.tailwindcss',
                        title: 'TailwindCSS',
                        type : 'basic',
                        link : '/guides/customization/tailwindcss'
                    },
                    {
                        id   : 'guides.customization.theming',
                        title: 'Theming',
                        type : 'basic',
                        link : '/guides/customization/theming'
                    },
                    {
                        id   : 'guides.customization.splash-screen',
                        title: 'Splash screen',
                        type : 'basic',
                        link : '/guides/customization/splash-screen'
                    }
                ]
            },
            {
                id      : 'guides.authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'import_contacts',
                children: [
                    {
                        id   : 'guides.authentication.jwt',
                        title: 'JWT',
                        type : 'basic',
                        link : '/guides/authentication/jwt'
                    }
                ]
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'treo',
        title   : 'Treo',
        subtitle: 'Components, services and more',
        type    : 'group',
        icon    : 'change_history',
        children: [
            {
                id   : 'treo.animations',
                title: 'Animations',
                type : 'basic',
                icon : 'movie_creation',
                link : '/treo/animations'
            },
            {
                id   : 'treo.helpers',
                title: 'Helpers',
                type : 'basic',
                icon : 'assistant',
                link : '/treo/helpers'
            },
            {
                id   : 'treo.mock-api',
                title: 'MockAPI',
                type : 'basic',
                icon : 'http',
                link : '/treo/mock-api'
            },
            {
                id   : 'treo.validators',
                title: 'Validators',
                type : 'basic',
                icon : 'check_circle',
                link : '/treo/validators'
            },
            {
                id      : 'treo.components',
                title   : 'Components',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'treo.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/treo/components/card'
                    },
                    {
                        id   : 'treo.components.date-range',
                        title: 'DateRange',
                        type : 'basic',
                        link : '/treo/components/date-range'
                    },
                    {
                        id   : 'treo.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/treo/components/drawer'
                    },
                    {
                        id   : 'treo.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/treo/components/highlight'
                    },
                    {
                        id   : 'treo.components.message',
                        title: 'Message',
                        type : 'basic',
                        link : '/treo/components/message'
                    },
                    {
                        id   : 'treo.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/treo/components/navigation'
                    }
                ]
            },
            {
                id      : 'treo.directives',
                title   : 'Directives',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'treo.directives.autogrow',
                        title: 'Autogrow',
                        type : 'basic',
                        link : '/treo/directives/autogrow'
                    },
                    {
                        id   : 'treo.directives..scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/treo/directives/scrollbar'
                    }
                ]
            },
            {
                id      : 'treo.services',
                title   : 'Services',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'treo.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/treo/services/config'
                    },
                    {
                        id   : 'treo.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/treo/services/splash-screen'
                    },
                    {
                        id   : 'treo.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/treo/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'treo.pipes',
                title   : 'Pipes',
                icon    : 'memory',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'treo.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/treo/pipes/find-by-key'
                    }
                ]
            }
        ]
    },
    {
        id      : 'custom-components',
        title   : 'Custom components',
        subtitle: 'To help you build your app quickly',
        type    : 'group',
        icon    : 'memory',
        children: [
            {
                id   : 'custom-components.overview',
                title: 'Overview',
                type : 'basic',
                icon : 'info',
                link : '/custom-components/overview'
            },
            {
                id   : 'custom-components.messages',
                title: 'Messages',
                type : 'basic',
                icon : 'message',
                link : '/custom-components/messages'
            },
            {
                id   : 'custom-components.notifications',
                title: 'Notifications',
                type : 'basic',
                icon : 'notifications',
                link : '/custom-components/notifications'
            },
            {
                id   : 'custom-components.search',
                title: 'Search',
                type : 'basic',
                icon : 'search',
                link : '/custom-components/search'
            },
            {
                id   : 'custom-components.shortcuts',
                title: 'Shortcuts',
                type : 'basic',
                icon : 'bookmarks',
                link : '/custom-components/shortcuts'
            },
            {
                id   : 'custom-components.user',
                title: 'User',
                type : 'basic',
                icon : 'account_circle',
                link : '/custom-components/user'
            }
        ]
    },
    {
        id      : 'supported-components',
        title   : 'Supported components',
        subtitle: 'Compatible third party components',
        type    : 'group',
        icon    : 'memory',
        children: [
            {
                id   : 'supported-components.apex-charts',
                title: 'ApexCharts',
                type : 'basic',
                icon : 'insert_chart',
                link : '/supported-components/apex-charts'
            },
            {
                id   : 'supported-components.full-calendar',
                title: 'FullCalendar',
                type : 'basic',
                icon : 'today',
                link : '/supported-components/full-calendar'
            },
            {
                id   : 'supported-components.ngx-markdown',
                title: 'ngx-markdown',
                type : 'basic',
                icon : 'text_format',
                link : '/supported-components/ngx-markdown'
            },
            {
                id   : 'supported-components.quill-editor',
                title: 'Quill editor',
                type : 'basic',
                icon : 'font_download',
                link : '/supported-components/quill-editor'
            }
        ]
    }
];
