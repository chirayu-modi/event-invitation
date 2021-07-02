import React from 'react';
import { HeaderTitle } from "../../Common/Typography/header-title.component";
import AddCalendar from "./Calender.component";

export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center mt-24 p-5 items-center">
      <HeaderTitle title="This will be a tagline which address people nicely" />
      <AddCalendar />
      <img
          alt="Event"
          loading="lazy"
          src="/assets/svgs/hero.svg"
          className="lg:w-4/12 w-11/12 my-8"
        />
    </section>
  );
};
