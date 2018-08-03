import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {fuseAnimations} from '../../../../../../@fuse/animations';

@Component({
    selector     : 'app-phone-list',
    templateUrl  : './phone-list.component.html',
    styleUrls    : ['./phone-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class PhoneListComponent implements OnInit, OnDestroy {

    phoneBrand = new FormControl();
    phoneModel = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    selected = '';
    filteredOptions: Observable<string[]>;
    ngOnInit(): void {

        this.filteredOptions = this.phoneBrand.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    ngOnDestroy(): void {

    }
}
