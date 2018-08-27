import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {fuseAnimations} from "../../../../../../@fuse/animations";

@Component({
    selector     : "app-phone-list",
    templateUrl  : "./phone-list.component.html",
    styleUrls    : ["./phone-list.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class PhoneListComponent implements OnInit, OnDestroy {

    phoneBrand = new FormControl();
    phoneModel = new FormControl();

    options: string[] = ["One", "Two", "Three"];

    brandFilteredOptions: Observable<string[]>;
    modelFilteredOptions: Observable<string[]>;

    @Input() phoneListForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}
    ngOnInit(): void {

        this.brandFilteredOptions = this.phoneBrand.valueChanges
            .pipe(
                startWith(""),
                map(value => this._filter(value))
            );
        this.modelFilteredOptions = this.phoneModel.valueChanges
            .pipe(
                startWith(""),
                map(value => this._filter(value))
            );

        this.phoneListForm = this.createPhoneListForm();
    }

    createPhoneListForm(): FormGroup {
        return this._formBuilder.group({
            imei               : new FormControl(),
            phoneColor         : new FormControl(),
            phoneCode          : new FormControl(),
        });

    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    ngOnDestroy(): void {

    }
}
