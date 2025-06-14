import Listing from '../models/listing.model.js';


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
            return next({ status: 404, message: 'Listing not found' });
        }

        if(req.user.id !== listing.userRef ) {
            return  next({ status: 403, message: 'You are not authorized to delete this listing' });
        }
        await Listing.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        next(error);
    }
}