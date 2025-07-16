import Card from "@/components/Card"
import Link from "next/link"

export default function Notifs(){
    return <>
    <Card>
        <h1> Notifications</h1>
        <Link href={`/complex-dashboard/archived`}>Archived Notifs...</Link>
   </Card>
    
    </>

}