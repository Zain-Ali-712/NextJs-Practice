import Link from "next/link"
export default function F1() {
  return (
    <>
    <h1>F1 Page</h1>
    <Link href={`/f1/f2`}><h1>F2</h1></Link>
    <Link href={`/f3`}><h1>F3</h1></Link>
    </>
  )
}
