"use client";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { ServiceStep } from "@/lib/services";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState<ServiceStep[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();
    const fetchServices = async () => {
      setStatus("loading");
      try {
        const response = await fetch("/api/services", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setServices(data);
        setStatus("idle");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setStatus("error");
      }
    };
    fetchServices();
    return () => controller.abort();
  }, []);

  if (status === "error") {
    return (
      <Section>
        <Container>
          <p className="text-muted-foreground text-center text-sm">
            Unable to load services. Please try again later.
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <header className="mb-10 text-center md:mb-14">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            How I work with clients
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm sm:text-base md:text-lg">
            From idea to shipped product.
          </p>
        </header>

        {status === "loading" ? (
          <p className="text-muted-foreground text-center text-sm">Loading…</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((step) => (
              <article
                key={step.subtitle}
                className="bg-card flex flex-col items-center gap-6 rounded-2xl border border-slate-200 p-5 md:flex-row"
              >
                <span
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-2xl font-medium text-white tabular-nums md:h-16 md:w-16 md:text-3xl"
                  aria-hidden
                >
                  {step.title}
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-foreground text-base font-semibold sm:text-lg md:text-xl">
                    {step.subtitle}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Services;
