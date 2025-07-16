import Card from "@/components/Card"
import Link from "next/link"

export default function Notifs(){
    return <>
    <Card>
        <h1>Archived Notifications</h1>
        <Link href={`/complex-dashboard`}>Default Notifs...</Link>
    </Card>
    
    </>

}