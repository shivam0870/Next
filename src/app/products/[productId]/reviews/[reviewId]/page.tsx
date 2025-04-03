export default async function ProductReview ({
    params,
} :  {
    params : Promise<{productId : string; reviewId : string}>;
}) {
    const {productId, reviewId} = await params;

    if (Number(productId) > 1000) {
        return {status : 200, message : "Product ID not found"};
    } else {
        return <h1>Review {reviewId} of Product {productId}</h1>;
    }
}
