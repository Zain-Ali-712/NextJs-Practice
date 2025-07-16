export default function ComplexDashboardLayout({
    children,
    analytics,
    users,
    notifications,
}:{
    children: React.ReactNode;
    analytics: React.ReactNode;
    users:React.ReactNode;
    notifications: React.ReactNode;
}) {
    return(
<>
           <div>{children}</div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection:"column"}}>
                    <div>{users}</div>
                    <div>{analytics}</div>
                </div>
                <div style={{display: "flex", flex:1}}>
                    {notifications}
                </div>
            </div>
        </> 
    );
        
}