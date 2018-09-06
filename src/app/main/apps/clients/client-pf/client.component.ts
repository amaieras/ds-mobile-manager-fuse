import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import {Observable, Subject} from 'rxjs';
import {map, startWith, takeUntil} from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import {ClientPF} from './client-pf.model';
import {ClientPFService} from './client.service';
import {FormControl} from '@angular/forms';

@Component({
    selector     : 'app-client-pf',
    templateUrl  : './client.component.html',
    styleUrls    : ['./client.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ClientPFComponent implements OnInit, OnDestroy
{
    clientPF: ClientPF;
    pageType: string;
    clientPFForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ClientPFService} _clientPFService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _clientPFService: ClientPFService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    )
    {
        // Set the default
        this.clientPF = new ClientPF();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to update product on changes
        this._clientPFService.onClientPFChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(clientPF => {

                if ( clientPF )
                {
                    this.clientPF = new ClientPF(clientPF);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.clientPF = new ClientPF();
                }

                this.clientPFForm = this.createClientPFForm();
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
     * Create client-pf form
     *
     * @returns {FormGroup}
     */
    createClientPFForm(): FormGroup
    {
        return this._formBuilder.group({
            key                : [this.clientPF.$key],
            lastname           : [this.clientPF.lastname],
            firstname          : [this.clientPF.firstname],
            email              : [this.clientPF.email],
            firm               : [this.clientPF.firm],
            phone              : [this.clientPF.phone],
            phoneList         :  [this._formBuilder.array([])]
        });
    }

    /**
     * Save client-pf
     */
    saveClientPF(): void
    {
        const data = this.clientPFForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._clientPFService.saveProduct(data)
            .then(() => {

                // Trigger the subscription with new data
                this._clientPFService.onClientPFChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Product saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    /**
     * Add client-pf
     */
    addClientPF(): void
    {
        this._clientPFService.addData();
    }
    //     const data = this.clientPFForm.getRawValue();
    //     data.handle = FuseUtils.handleize(data.name);
    //
    //     this._clientPFService.addProduct(data)
    //         .then(() => {
    //
    //             // Trigger the subscription with new data
    //             this._clientPFService.onClientPFChanged.next(data);
    //
    //             // Show the success message
    //             this._matSnackBar.open('Product added', 'OK', {
    //                 verticalPosition: 'top',
    //                 duration        : 2000
    //             });
    //
    //             // Change the location with new one
    //             // this._location.go('apps/e-commerce/products/' + this.clientPF.id + '/' + this.clientPF.handle);
    //         });
    // }
}
