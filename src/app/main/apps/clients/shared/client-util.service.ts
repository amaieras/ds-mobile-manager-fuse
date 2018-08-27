import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ClientUtilService {
    constructor(private afs: AngularFirestore) { }

    /**
     * Returns an observable of strings
     * @Returns {Observable<{}>}
     */
    getAboutUsList(): Observable<{}> {
        return this.afs.collection("lists").doc("about-us-list").valueChanges();
    }
}