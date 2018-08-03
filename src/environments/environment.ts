// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production    : false,
    hmr           : false,
    firebaseConfig: {
        apiKey: 'AIzaSyDL-_f_lQb4dnkx6GRrL7O7L7sp2A1Kj1w',
        authDomain: 'ds-mobile-dev.firebaseapp.com',
        databaseURL: 'https://ds-mobile-dev.firebaseio.com',
        projectId: 'ds-mobile-dev',
        storageBucket: 'ds-mobile-dev.appspot.com',
        messagingSenderId: '931169905269'
    },
    firebaseConfigProd: {
        apiKey: 'AIzaSyAexP1Haz3RsxHqPX--XncgC1Rxef_wMDA',
        authDomain: 'ds-mobile-prod.firebaseapp.com',
        databaseURL: 'https://ds-mobile-prod.firebaseio.com',
        projectId: 'ds-mobile-prod',
        storageBucket: '',
        messagingSenderId: '662623055885'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
