import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <section className="rounded-3xl bg-slate-900/50 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl">
      {children}
    </section>
  );
}

