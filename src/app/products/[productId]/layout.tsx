export default function ProductDetailsProduct({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log('ProductDetailsProduct layout is rendered with children:', children);
    
    return (
        <>
            {children}
            <h2>Featured Products .. </h2>
        </>
    );
}
