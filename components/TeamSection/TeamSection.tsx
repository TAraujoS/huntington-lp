"use client";

import { DesktopTeamCard } from "./DesktopTeamCard";
import { MobileTeamCard } from "./MobileTeamCard";

export const TeamSection = () => {
  return (
    <section
      id="equipe"
      className="py-10 flex flex-col items-center px-6 text-center"
    >
      <h2 className="text-gray-neutral text-lg font-semibold mb-5">
        CONHEÇA NOSSO <p className="text-blue-default inline">CORPO CLÍNICO</p>{" "}
        E EQUIPE MULTIDISCIPLINAR
      </h2>

      <div className="w-full hidden lg:block">
        <DesktopTeamCard />
      </div>

      <div className="block lg:hidden">
        <MobileTeamCard />
      </div>
    </section>
  );
};
