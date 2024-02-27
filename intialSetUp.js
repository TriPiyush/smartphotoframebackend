const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const countryList = require('country-list');
const constants = require('./app/config/constants')
let state = require('countries-state-list').State;
let stateList = require('./stateList.json')
const initializeDB = async () => {
    // initilize Role collection
    //  const result = await prisma.Role.aggregate({ _count: true });
    //  if (result._count === 0) {
    //      // create role
    //      const createResult = await prisma.Role.createMany({
    //          data: [
    //              { name: constants.ADMIN },
    //              { name: constants.SUPERADMIN },
    //              { name: constants.USER }
    //          ]
    //      });
    //      if (createResult.count > 0) {
    //          console.log(constants.ROLE_ADDED)
    //      }
    //  }

    // initialize state collections
    const statesList = await prisma.statesList.aggregate({ _count: true });
    if (statesList._count === 0) {
        // create province
        const states = state.getStatesOfCountry('IN').map((each => ({ ...each, code: each.isoCode, latitude: each.latitude ? each.latitude : "", longitude: each.longitude ? each.longitude : "" })));
        // const createResult = await prisma.statesList.createMany({
        //     data: states
        // });
        // if (createResult.count > 0) {
        //     console.log(constants.STATES_ADDED)
        // }
    }
    


}

module.exports = {
    initializeDB
}