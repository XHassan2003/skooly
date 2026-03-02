export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="conatiner mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
