import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';


export const createListing= async (req, res,next) => {
    try {
          console.log(req.body);
         const listing = await Listing.create(req.body);
         return res.status(201).json(
            listing
         );
    } catch (error) {
         next(error);
    }
}

export const deleteListing = async (req, res, next) => {
      
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        if (!listing) {
            return next(errorHandler(404,'Listing not found' ));
        }

        if(req.user.id !== listing.userRef ) {
            return  next(errorHandler(403,'You are not authorized to delete this listing' ));
        }

        await Listing.findByIdAndDelete(id);
        return res.status(200).json('Listing deleted successfully' );
    } catch (error) {
        next(error);
    }
}

export const updateListing = async (req, res, next) => {
     
     
     try {
          const { id } = req.params;
          const listing = await Listing.findById(id);

          if( !listing ) {
               return next(errorHandler(404,'No Such Listing Exist!' ));
          }

          if(req.user.id !== listing.userRef ) {
               return next(errorHandler(403,'You are not authorized to update this listing' ));
          }

          const updatedListing = await Listing.findByIdAndUpdate(id,req.body, {
               new: true
               
          });
          res.status(200).json(updatedListing);
     } catch (error) {
          next(error);
     }
}

export const showListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        if (!listing) {
            return next(errorHandler(404, 'Listing not found'));
        }

        return res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}