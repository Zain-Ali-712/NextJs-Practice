import { Metadata } from "next";

type props = {
    params : Promise<{productId : string}>
};

export const generateMetadata = async ({
    params,
}: props): Promise<Metadata> => {
    const id = (await params).productId;
    return{
        title:`Product ${id}`
    };
};


export default async function ProductDetails({params}: props) {
    const productId = (await params).productId;
    return <h1>Details of Product: {productId}</h1>
}