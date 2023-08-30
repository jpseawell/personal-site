import { BackButton } from "@/components/BackButton";

export default function PostsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col w-1/2 max-w-xl m-auto border border-y-0 border-slate-800">
      <div className="p-4">
        <BackButton />
      </div>
      {children}
    </main>
  );
}
