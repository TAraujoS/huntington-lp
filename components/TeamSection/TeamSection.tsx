"use client";

import { DesktopTeamCard } from "./DesktopTeamCard";
import { MobileTeamCard } from "./MobileTeamCard";

export const TeamSection = () => {
  return (
    <section
      id="equipe"
      className="py-10 flex flex-col items-center px-16 text-center"
    >
      <h2 className="text-gray-neutral text-xl lg:text-2xl font-semibold mb-5">
        CONHEÇA NOSSO <p className="text-blue-normal inline">CORPO CLÍNICO</p> E
        EQUIPE MULTIDISCIPLINAR
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
