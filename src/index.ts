import { Company } from './Company';
import { User } from './User';

// const user = new User();

// console.log(user)

// const company = new Company();

// console.log(company);

import {CustomMap} from './CustomMap';

const map = new CustomMap('map');
const user = new User();
const company = new Company();
map.addUserMarker(user);
map.addCompanyMarker(company);

