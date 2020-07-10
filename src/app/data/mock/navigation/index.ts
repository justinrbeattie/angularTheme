import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { TreoNavigationItem } from '@treo/components/navigation';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { defaultNavigation } from 'app/data/mock/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class NavigationMockApi implements TreoMockApi
{
    // Private Readonly
    private readonly _defaultNavigation: TreoNavigationItem[];

    /**
     * Constructor
     *
     * @param _treoMockApiService
     */
    constructor(
        private _treoMockApiService: TreoMockApiService
    )
    {
        // Set the data
        this._defaultNavigation = defaultNavigation;

        // Register the API endpoints
        this.register();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register
     */
    register(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/navigation')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._defaultNavigation)
                ];
            });
    }
}
