const { PrismaClient, User, Prisma } = require("@prisma/client");
const constants = require("../config/constants");
const prisma = new PrismaClient();
const { createPaginator } = require('prisma-pagination')

// const { parser } = require('../helper')

const paginate =  ({ perPage: 20 })

exports.getMasterDetails = async (req, res) => {

    const countryResult = await prisma.statesList.findMany();
    console.log( countryResult)
    res.status(200).send(countryResult);
  };
  