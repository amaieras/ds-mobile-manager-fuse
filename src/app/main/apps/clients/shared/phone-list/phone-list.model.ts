
import {ProblemList} from 'app/main/apps/clients/shared/problem-list.model';

/**
 * Created by Spacaru on 10/22/2017.
 */
export class PhoneList {
    newBrand = '';
    newModel = '';
    newSingleModel = '';
    phoneBrand = '';
    phoneModel = '';
    phoneCode = '';
    imei = '';
    phoneColor = '';
    totalPricePerPhone = 0;
    problems: ProblemList[]  = [];
    observation = '';
    tested: string;
    isRepaired = false;
    isPayed = false;
}
