export default async function ProductReview ({
    params,
} :  {
    params : Promise <{productId : string; reviewId : string}>;
}) {
const {productId, reviewId} = await params;
// const {productId} = (await params).productId;
// const {reviewId} = (await params).reviewId;
console.log(productId + " This is product ID " + reviewId + " This is review ID");
return<h1>Review {reviewId} of Product {productId}</h1>;
}

