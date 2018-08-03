import {PhoneList} from 'app/main/apps/clients/shared/phone-list/phone-list.model';
import {PaymentMethod} from 'app/main/apps/clients/shared/payment-method.model';

/**
 * Created by Spacaru on 10/22/2017.
 */
export class ClientPF {

    $key: string;
    clientNo: number;
    addedDate: string;
    lastname: string;
    firstname: string;
    email: string;
    firm: string;
    phone: string;
    phoneList: PhoneList[];
    priceOffer: string;
    paymentMethod: PaymentMethod;
    appointmentDate: string;
    aboutUs: string;
    aboutUsName: string;
    priceOfferCash: string;
    deliveredDate: string;

    constructor(client?) {
        client = client || {};

    }




}
