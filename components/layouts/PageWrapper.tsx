// components/layouts/PageWrapper.tsx
import Container from "./Container";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageWrapper({
  children,
  className = "",
}: PageWrapperProps) {
  return (
    <main
      className={`
        min-h-screen
        bg-slate-950
        text-slate-100
        flex
        flex-col
        ${className}
      `}
    >
      <Container className="flex-1 w-full py-10">{children}</Container>
    </main>
  );
}
