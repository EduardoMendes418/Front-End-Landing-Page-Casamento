"use client";

import { Hero } from "./components/Hero/Hero";
import { Packages } from "./components/Packages/Packages";
import { QuoteBanner } from "./components/QuoteBanner/QuoteBanner";
import { ProcessTitle } from "./components/ProcessTitle/ProcessTitle";
import { ProcessSteps } from "./components/ProcessSteps/ProcessSteps";
import { FAQ } from "./components/FAQ/FAQ";
import { Quality } from "./components/Quality/Quality";

export default function ServicesPageContent() {
  return (
    <div className="bg-white">
      <Hero />
      <Packages />
      <QuoteBanner />
      <ProcessTitle />
      <ProcessSteps />
      <FAQ />
      <Quality />
    </div>
  );
}
