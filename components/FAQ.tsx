"use client";
import React, { useRef, useEffect, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";

interface FAQItem {
  title: string;
  content: string;
}

const content: FAQItem[] = [
  {
    title: "Comment avoir les dernières mises à jour sur BMset ? ",
  content:    " - Notre équipe travaille quotidiennement afin de mettre à jour le contenu de notre plateforme BMset, et ce au fur et à mesure de l’avancement de l’année universitaire ",
  },

  {
    title: "Comment prolonger mon abonnement en cas de décalage de concours de résidanat ? ",
     content: "- En cas de décalage du Résidanat, pas d’inquiétude ! Votre abonnement sera automatiquement prolongé jusqu’à la date prévue pour votre concours. BMset sera là pour un accompagnement complet !",
  },
  {
    title: "Quelles sont les modalités de paiement disponibles pour acheter un abonnement BMset ?",
    content:  " - La plateforme BMset dispose des 3 modalités de paiement suivantes : - Paiement par CCP  - Paiement par l’application BaridiMob",
  },
];
const FAQ: React.FC = () => {
  const isClient = typeof window !== "undefined";

  const [open, setOpen] = useState<boolean[]>(() => Array(content.length).fill(false));
  const refs = content.map(() => useRef<HTMLDivElement>(null));

  const onClick = (index: number) => {
    setOpen((prevOpen) => prevOpen.map((value, i) => (i === index ? !value : value)));
  };

  useEffect(() => {
    if (isClient) {
      const newHeights = content.map((_, i) =>
        open[i] ? `${refs[i].current?.scrollHeight}px` : "0px"
      );
      refs.forEach((ref, i) => {
        const current = ref.current;
        if (current) {
          current.style.maxHeight = newHeights[i];
        }
      });
    }
  }, [isClient, open, refs]);

  return (
    <div id="FAQ" className=" grid grid-cols-1 max-auto  items-center py-[3rem] px-24 justify-center text-center">
      <h1 className="ext-center text-2xl font-bold sm:text-3xl pb-8"> FAQ </h1>
      {content.map((item, index) => (
        <div key={index} className="border border-green-50 rounded-lg mb-4">
          <div
            className={`flex justify-between items-center py-4 px-4 gap-4 cursor-pointer hover:bg-green-50 transition-all duration-300 ${
              index === 0 ? "rounded-t-lg" : "border-t"
            } ${index === content.length - 1 && !open[index] && "rounded-b-lg"}`}
            onClick={() => onClick(index)}
          >
            <h3 className="sm:text-lg font-semibold">{item.title}</h3>
            <IconArrowRight
              className={`w-3 h-3 text-gray-900 transition-transform duration-300 shrink-0 ${
                open[index] && "transform rotate-90"
              }`}
            />
          </div>
          <div
            ref={refs[index]}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <p className="px-4 pt-2 pb-4 text-1xl text-gray-900">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;