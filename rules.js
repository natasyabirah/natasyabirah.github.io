
/* Rule 1. A party of more than 8 guests must phone the restaurant. */
function needsPhoneCall(party) {
    return party > 8;
}

/* Rule 2. Every price is shown with a dollar sign in front. */
function priceLabel(price) {
    return "$" + price;
}

/* Rule 3. Total guests is adults plus children. */
function totalGuests(adults, children) {
    return Number(adults) + Number(children);
}
