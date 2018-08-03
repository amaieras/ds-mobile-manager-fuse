import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class ClientsPFService implements Resolve<any>
{
    // clientsPF: any[];
    onClientsPFChanged: BehaviorSubject<any>;
    clientsPF: any[];

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _db: AngularFireDatabase
    )
    {
        // Set the defaults
        this.onClientsPFChanged = new BehaviorSubject({});
        // this.clientsPF = _db.list('/clients/pf');

    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getClientsPF()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );

        });
    }

    /**
     * Get clients-pf
     *
     * @returns {Promise<any>}
     */
    getClientsPF(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/e-commerce-products')
                .subscribe((response: any) => {
                    this.clientsPF = response;
                    this.onClientsPFChanged.next(this.clientsPF);
                    resolve(response);
                }, reject);
        });
        // return new Promise((resolve, reject) => {
        //     this.clientsPF.snapshotChanges().map(arr => {
        //         return arr.map(snap => Object.assign(snap.payload.val(), {$key: snap.key}));
        //     }).subscribe((response: any) => {
        //         console.log(response)
        //         this.clientsPF = response;
        //         this.onClientsPFChanged.next(this.clientsPF);
        //         resolve(response);
        //     }, reject);
        // });

    }
}
