import _ from 'lodash'; // installing and importing lodash library 


// Lodash has utility methods that we can use to implement pagination
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;             // the formual to calculate the starting index of the items on the page 
    return _(items).slice(startIndex).take(pageSize).value();   // converting items array to a lodash wrapper & using lodash to go to this startindex and take all the items for the current page and then finally we need to convert this lodash wrapper object to regular array to take value 
}