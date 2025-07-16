export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxShadow: "0 10px 12px rgba(0,0,0,0.05)",
        padding: "4rem",
        margin:"10px",
        backgroundColor: "#ccc",
      }}
    >
      {children}
    </div>
  );
}
