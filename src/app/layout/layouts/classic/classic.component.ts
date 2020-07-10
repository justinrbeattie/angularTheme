import { Component, HostBinding, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TreoConfigService } from '@treo/services/config';
import { TreoMediaWatcherService } from '@treo/services/media-watcher';
import { TreoNavigationService } from '@treo/components/navigation';
import { AppConfig } from 'app/core/config/app.config';

@Component({
    selector     : 'classic-layout',
    templateUrl  : './classic.component.html',
    styleUrls    : ['./classic.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassicLayoutComponent implements OnInit, OnDestroy
{
    config: AppConfig;
    data: any;
    isScreenSmall: boolean;

    @HostBinding('class.fixed-header')
    fixedHeader: boolean;

    @HostBinding('class.fixed-footer')
    fixedFooter: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {DOCUMENT} _document
     * @param {Router} _router
     * @param {TreoConfigService} _treoConfigService
     * @param {TreoMediaWatcherService} _treoMediaWatcherService
     * @param {TreoNavigationService} _treoNavigationService
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _treoConfigService: TreoConfigService,
        private _treoMediaWatcherService: TreoMediaWatcherService,
        private _treoNavigationService: TreoNavigationService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.fixedHeader = false;
        this.fixedFooter = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the resolved route data
        this._activatedRoute.data.subscribe((data: Data) => {
            this.data = data.initialData;
        });

        // Subscribe to media changes
        this._treoMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Check if the breakpoint is 'lt-md'
                this.isScreenSmall = matchingAliases.includes('lt-md');
            });

        // Subscribe to config changes
        this._treoConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: AppConfig) => {

                // Store the config
                this.config = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param key
     */
    toggleNavigation(key): void
    {
        // Get the navigation
        const navigation = this._treoNavigationService.getComponent(key);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    /**
     * Toggle the dark mode
     */
    toggleDarkMode(): void
    {
        this._treoConfigService.config = {
            theme: this.config.theme === 'light' ? 'dark' : 'light'
        };
    }
}
