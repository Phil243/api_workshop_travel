import { Router } from "express";
import {
    getAllCountries,
    getSingleCountry,
    addNewCountry,
    editCountry,
    deleteCountry
 } from "../controllers/countriesControllers.js";

 const countriesRouter = Router();

 countriesRouter.route('/').get(getAllCountries).post(addNewCountry);

 countriesRouter
    .route('/:alphaXCode')
    .get(getSingleCountry)
    .put(editCountry)
    .delete(deleteCountry);

export default countriesRouter;
