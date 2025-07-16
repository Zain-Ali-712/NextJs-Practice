import Link from "next/link"

export default function Home () {
    return<>
    <h1>Wellcome Home!</h1>
    <Link href="/products">Products</Link>
    <Link href="/docs">Docs</Link>
    </> 

}