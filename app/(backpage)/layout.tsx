import { BackButton } from "@/components/BackButton";

export default function BackPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col w-1/2 max-w-xl m-auto">
      <div className="py-4">
        <BackButton />
      </div>
      {children}
    </main>
  );
}
