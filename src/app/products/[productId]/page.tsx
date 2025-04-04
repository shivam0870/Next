export default async function ProductDetails({
    params,
}: {
    params : Promise <{productId : string}>;
}) {
    const productId = (await params).productId;
    console.log(productId);
    return <h1>Details About Products {productId}</h1>;
}

