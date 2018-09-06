import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class ClientPFService implements Resolve<any>
{
    routeParams: any;
    clientPF: any;
    onClientPFChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _afs: AngularFirestore
    )
    {
        // Set the defaults
        this.onClientPFChanged = new BehaviorSubject({});
    }

    addData(): void {
        const data = {
            'aboutUsList': [
                'Altele',
                'GOOGLE',
                'FACEBOOK',
                'OLX',
                'RECOMANDARE',
                'A MAI FOST',
                'STRADA',
                'INCREMENTAL',
                'EUGEN',
                'INCREMEN',
                'CRISTI',
                'ORANGE',
                'ONUFREI',
                'RICARDO MI',
                'REC CRISTI',
                'REC. FLORIN',
                'OANA',
                'ALICE',
                'RECOMANDARE CLIENT',
                'WIZZ MOBILE',
                'HELLA',
                'COLET DIN TARA',
                '?',
                'TMD'
            ],
            'clientGSMList': [
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'stan',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'name' : 'adi lipovei',
                    'phone' : '0722858848'
                },
                {
                    'city' : 'timisoara',
                    'name' : 'cristi deva',
                    'phone' : '0721848899'
                },
                {
                    'city' : 'nadlac',
                    'firm' : '',
                    'name' : 'simi nadlag',
                    'phone' : ''
                },
                {
                    'city' : 'pitesti',
                    'name' : 'pitesti 1 dinca gabriel',
                    'phone' : '0760116611'
                },
                {
                    'city' : 'alba iulia',
                    'firm' : '',
                    'name' : 'calin alba',
                    'phone' : '0770776398'
                },
                {
                    'city' : 'alba iulia',
                    'name' : 'calin alba',
                    'phone' : '0770776398'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'andrei complex',
                    'phone' : '0722547135'
                },
                {
                    'city' : 'campia turzii',
                    'name' : 'alin dinis turda',
                    'phone' : '0748521807'
                },
                {
                    'city' : 'campia turzii',
                    'name' : 'tomescu marian',
                    'phone' : '0770551825'
                },
                {
                    'city' : 'timisoara',
                    'name' : 'manyov rafael',
                    'phone' : '-'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'denis',
                    'phone' : ''
                },
                {
                    'city' : 'deva',
                    'firm' : 'Opera Nextgsm',
                    'name' : 'beni lupu',
                    'phone' : '0734268268'
                },
                {
                    'city' : 'ALBA',
                    'name' : 'calin',
                    'phone' : ''
                },
                {
                    'city' : 'PLOIESTI',
                    'name' : 'cezar gsm',
                    'phone' : '0728511084'
                },
                {
                    'city' : 'TIMISOARA',
                    'name' : 'luci dinu (deta gsm)',
                    'phone' : '0771559017'
                },
                {
                    'city' : 'lugoj',
                    'name' : 'marian',
                    'phone' : ''
                },
                {
                    'city' : 'bucuresti',
                    'firm' : '',
                    'name' : 'gsm company',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'name' : 'dan taxi',
                    'phone' : '0762397339'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'claudiu',
                    'phone' : '0755349129'
                },
                {
                    'city' : 'CALARASI',
                    'name' : 'deatcu claudiu',
                    'phone' : '0732907557'
                },
                {
                    'city' : 'ploiesti',
                    'firm' : '',
                    'name' : 'ioachim cristian',
                    'phone' : '0724387274'
                },
                {
                    'city' : 'sebes',
                    'name' : 'cuteanu ioan',
                    'phone' : ''
                },
                {
                    'city' : 'sibiu',
                    'firm' : '',
                    'name' : 'neo tech srl',
                    'phone' : '0723554755'
                },
                {
                    'city' : 'DEVA',
                    'name' : 'marian hi tech deva',
                    'phone' : '0724861681'
                },
                {
                    'city' : 'timisoara',
                    'name' : 'seba lipovei',
                    'phone' : '0772264464'
                },
                {
                    'city' : 'caransebes',
                    'firm' : '',
                    'name' : 'utu',
                    'phone' : ''
                },
                {
                    'city' : 'lugoj',
                    'name' : 'marian lugoj',
                    'phone' : '0722376121'
                },
                {
                    'city' : 'pitesti',
                    'firm' : '',
                    'name' : 'vasile florin',
                    'phone' : '0740411140'
                },
                {
                    'city' : 'sebes',
                    'name' : 'sebes',
                    'phone' : ''
                },
                {
                    'city' : 'campina',
                    'firm' : '',
                    'name' : 'grecu ionut - toni gsm',
                    'phone' : '0723313253'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'vasi lugoj',
                    'phone' : '0731375524'
                },
                {
                    'city' : 'timisoara',
                    'name' : 'tz',
                    'phone' : ''
                },
                {
                    'city' : 'sibiu',
                    'name' : 'vintila florin',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'name' : 'cezar lipovei',
                    'phone' : '0721168247'
                },
                {
                    'city' : 'timisoara',
                    'name' : 'continental automotive',
                    'phone' : '0760030313'
                },
                {
                    'city' : 'germania',
                    'firm' : '',
                    'name' : 'ionut',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'tzupi',
                    'phone' : '071223458'
                },
                {
                    'city' : 'caransebes',
                    'firm' : 'TMD',
                    'name' : 'radu ivanus',
                    'phone' : '0723808837'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'ds mobile',
                    'phone' : '1234567890'
                },
                {
                    'city' : 'timisoara',
                    'firm' : 'STAN',
                    'name' : 'luci',
                    'phone' : '0720635637'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'rafa',
                    'phone' : '0722644772'
                },
                {
                    'city' : 'timisoara',
                    'firm' : 'Contact',
                    'name' : 'flavio',
                    'phone' : '0727771221'
                },
                {
                    'city' : 'turda',
                    'firm' : '',
                    'name' : 'dinis alin',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'alex',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'cezar',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'cosmin',
                    'phone' : '0712345678'
                },
                {
                    'city' : 'fagaras',
                    'firm' : '',
                    'name' : 'sinea florin',
                    'phone' : '0724639638'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'andrei',
                    'phone' : '07'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'contact',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'adi',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : 'Saf Gsm ',
                    'name' : 'saf gsm',
                    'phone' : '0763834006'
                },
                {
                    'city' : 'zalau',
                    'firm' : '',
                    'name' : 'marin',
                    'phone' : ''
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'dani gsm',
                    'phone' : '0722441822'
                },
                {
                    'city' : 'tecuci',
                    'firm' : 'sc cadrisil srl',
                    'name' : 'adrian',
                    'phone' : '0720920900'
                },
                {
                    'city' : 'ploiesti',
                    'firm' : '',
                    'name' : 'chiorean virgil',
                    'phone' : '0722780434'
                },
                {
                    'city' : 'breaza',
                    'firm' : 'longmax distribution',
                    'name' : 'emanul muresan',
                    'phone' : '0721315000'
                },
                {
                    'city' : 'cluj napoca',
                    'firm' : '',
                    'name' : 'bota marin',
                    'phone' : '0743755659'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'bogdan',
                    'phone' : '0733379999'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'rafael',
                    'phone' : '0712345678'
                },
                {
                    'city' : 'arad',
                    'firm' : '',
                    'name' : 'cosmin-arad',
                    'phone' : '0752298781'
                },
                {
                    'city' : 'slobozia',
                    'firm' : '',
                    'name' : 'alexandru slobazia',
                    'phone' : '0735722333'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'ati',
                    'phone' : '0736035180'
                },
                {
                    'city' : 'dej',
                    'firm' : '',
                    'name' : 'lup petru rares - gherla',
                    'phone' : '0745642475'
                },
                {
                    'city' : 'tg. jiu',
                    'firm' : '',
                    'name' : 'iulian tg jiu',
                    'phone' : '0764792133'
                },
                {
                    'city' : 'fagaras',
                    'firm' : '',
                    'name' : 'raducanu mugurel',
                    'phone' : ''
                },
                {
                    'city' : 'tulcea',
                    'firm' : 'Sc Moisescu Impex Srl',
                    'name' : 'moisescu razvan',
                    'phone' : '0723329529'
                },
                {
                    'city' : 'valcea',
                    'firm' : 'One Gsm',
                    'name' : 'sorescu octavian',
                    'phone' : '0743223328'
                },
                {
                    'city' : 'bistrita',
                    'firm' : '',
                    'name' : 'runcan vasile',
                    'phone' : '0755709592'
                },
                {
                    'city' : 'timisoara',
                    'firm' : '',
                    'name' : 'adi gheata',
                    'phone' : ''
                },
                {
                    'city' : 'bistrita',
                    'firm' : '',
                    'name' : 'mihutiu george cristian',
                    'phone' : '0742941634'
                },
                {
                    'city' : 'timisoara',
                    'firm' : 'mihai',
                    'name' : 'brabila',
                    'phone' : '0755349129'
                },
                {
                    'city' : 'dej',
                    'firm' : 'pc cataserv soft',
                    'name' : 'catalin',
                    'phone' : '0749489941'
                },
                {
                    'city' : 'bocsa',
                    'firm' : 'Bacserv Srl',
                    'name' : 'adrian borozan',
                    'phone' : '0746228414'
                },
                {
                    'city' : 'deva',
                    'firm' : 'center it srl',
                    'name' : 'sorin haraga deva',
                    'phone' : '0730816563'
                },
                {
                    'city' : 'targu jiu',
                    'firm' : '',
                    'name' : 'vladau nicolae',
                    'phone' : '0764792133'
                }
            ]
        };
        this._afs.collection('lists').doc('about-us-list').set(data);
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
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProduct()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getProduct(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onClientPFChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.clientPF = response;
                        this.onClientPFChanged.next(this.clientPF);
                        resolve(response);
                    }, reject);
            }
        });
    }

    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/' + product.id, product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    addProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/', product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
