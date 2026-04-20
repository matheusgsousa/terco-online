"use client";

import { useEffect, useMemo, useState } from "react";
import {
  mysteries,
  prayerOrder,
  type MysteryKey,
  type PrayerKey,
} from "../data/rosary";
import { prayers } from "../data/prayers";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Step = {
  key: PrayerKey;
  stage: "opening" | "decade" | "closing";
  decadeIndex?: number;
};

type RosaryViewProps = {
  mysteryKey: MysteryKey;
};

const prayerByKey = Object.fromEntries(
  prayers.map((prayer) => [prayer.key, prayer]),
);

export default function RosaryView({ mysteryKey }: RosaryViewProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = useMemo<Step[]>(() => {
    const list: Step[] = [];

    prayerOrder.opening.forEach((key) => {
      list.push({ key, stage: "opening" });
    });

    for (let decadeIndex = 1; decadeIndex <= 5; decadeIndex += 1) {
      prayerOrder.decade.forEach((key) => {
        list.push({ key, stage: "decade", decadeIndex });
      });
    }

    prayerOrder.closing.forEach((key) => {
      list.push({ key, stage: "closing" });
    });

    return list;
  }, []);

  const mystery =
    mysteries.find((item) => item.key === mysteryKey) ?? mysteries[0];
  const currentStep = steps[stepIndex] ?? steps[0];
  const currentPrayer = prayerByKey[currentStep.key];
  const currentDecade = currentStep.decadeIndex
    ? mystery.decades[currentStep.decadeIndex - 1]
    : undefined;
  const stepContextLabel =
    currentDecade?.title ??
    (currentStep.stage === "opening"
      ? "Abertura"
      : currentStep.stage === "closing"
        ? "Encerramento"
        : "");
  const currentImage = currentStep.decadeIndex
    ? (mystery.imageByDecade[currentStep.decadeIndex - 1] ??
      mystery.imageDefault)
    : mystery.imageDefault;

  const canGoPrev = stepIndex > 0;
  const canGoNext = stepIndex < steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
  }, [mysteryKey]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setStepIndex((index) => Math.max(0, index - 1));
      }

      if (event.key === "ArrowRight") {
        setStepIndex((index) => Math.min(steps.length - 1, index + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [steps.length]);

  return (
    <div className="container mx-auto max-w-6xl py-4">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <section>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-background shadow-sm">
            <img
              src={currentImage}
              alt={mystery.title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="flex flex-col rounded-xl border border-foreground/20 transparent p-6 shadow-sm">
          <div className="mb-4">
            <h1 className="mt-2 text-3xl font-semibold font-display">
              {currentPrayer?.title ?? "Oracao"}
            </h1>
            {stepContextLabel ? (
              <p className="mt-1 text-sm">{stepContextLabel}</p>
            ) : null}
          </div>

          <div className="flex-1 whitespace-pre-line text-lg leading-relaxed">
            {currentPrayer?.text ?? ""}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
              disabled={!canGoPrev}
              aria-label="Anterior"
              className={
                "rounded-full border p-2 transition " +
                (canGoPrev
                  ? "border-foreground hover:border-foreground/40"
                  : "cursor-not-allowed text-foreground/20 border-foreground/20")
              }
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="text-sm text-foreground/60">
              {stepIndex + 1}/{steps.length}
            </div>
            <button
              type="button"
              onClick={() =>
                setStepIndex((index) => Math.min(steps.length - 1, index + 1))
              }
              disabled={!canGoNext}
              aria-label="Proximo"
              className={
                "rounded-full border p-2 transition " +
                (canGoNext
                  ? "border-foreground bg-foreground text-background hover:bg-background hover:text-foreground"
                  : "cursor-not-allowed border-foreground/20 bg-foreground/10 text-foreground/40")
              }
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
