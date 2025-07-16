import { Metadata } from "next";
import Link from "next/link";

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
    return <h1><Link href={`/products/${productId}`}>Derails for Product {productId}</Link></h1>
}