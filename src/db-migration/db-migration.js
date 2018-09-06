(function() {
    /**
     * Convert aboutus-list from firebase json to firestore collection/document
     * @param data - firebase json data type
     * @returns {Array}
     */
    var getAboutUsArrayFromFB = function(data) {
        const aboutUsArr = [];
        const aboutUsKeys = Object.keys(data["aboutus-list"]);
        aboutUsKeys.forEach(key => {
            aboutUsArr.push(data["aboutus-list"][key]["name"]);
        })
        return aboutUsArr;
    }

    /**
     * Convert client-gsm-list from firebase json to firestore collection/document
     * @param data
     * @returns {Array}
     */
    var getClientGSMListFromFB = function(data) {
        const clientsGSMListArr = [];
        const clientGSMKeys = Object.keys(data["client-gsm-list"]);
        clientGSMKeys.forEach(key => {
            clientsGSMListArr.push(data["client-gsm-list"][key]);
        })
        return clientsGSMListArr;
    }

    /**
     * Convert client-gsm from firebase json to firestore collection/document
     * @param data
     * @returns {Array}
     */
    var getClientsGSMFromFB = function(data) {
        const clientsGSMArr = [];
        const clientGSMKeys = Object.keys(data["clients"]["gsm"]);
        clientGSMKeys.forEach(key => {
            clientsGSMArr.push(data["clients"]["gsm"][key]);
        })
        return clientsGSMArr;
    }

    /**
     * Convert client-pf from firebase json to firestore collection/document
     * @param data
     * @returns {Array}
     */
    var getClientsPFFromFB = function(data) {
        const clientsPFArr = [];
        const clientPFKeys = Object.keys(data["clients"]["pf"]);
        clientPFKeys.forEach(key => {
            clientsPFArr.push(data["clients"]["pf"][key]);
        })
        return clientsPFArr;
    }

    /**
     * Convert offers from firebase json to firestore collection/document
     * @param data
     * @returns {Array}
     */
    var getOffersFromFB = function(data) {
        const offersArr = [];
        const offerKeys = Object.keys(data["offers"]);
        offerKeys.forEach(key => {
            offersArr.push(data["offers"][key]);
        })
        return offersArr;
    }

    var getPartPriceListFromFB = function(data) {
        const partsPriceListArr = [];
        const partPriceKeys = Object.keys(data["part-price-list"]);

        partPriceKeys.forEach(key => {
            partsPriceListArr.push(data["part-price-list"][key]);
        })
        return partsPriceListArr;
    }
    // console.log(getAboutUsArrayFromFB(firebaseData));
    // console.log(getClientGSMListFromFB(firebaseData));
    // console.log(getClientsGSMFromFB(firebaseData));
    // console.log(getClientsPFFromFB(firebaseData));
    // console.log(getOffersFromFB(firebaseData));
    console.log(getPartPriceListFromFB(firebaseData));

})()

