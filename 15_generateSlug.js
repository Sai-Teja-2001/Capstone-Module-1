module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
let slug = String(title).toLowerCase().replaceAll(' ','-') + ".com"
return slug;
}