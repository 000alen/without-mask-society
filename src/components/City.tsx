import React, { useRef } from "react";

import { CityMember } from "../typings";
import { Avatar } from "./Avatar";
import { CityBackground } from "./backgrounds/CityBackground";
import { Title } from "./Title";
import { useAnimations } from "./useAnimations";

interface Props {
  city_title: string;
  city_members: CityMember[];
}

export const City: React.FC<Props> = ({ city_title, city_members }) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: city_members.length }, () => null)
  );

  useAnimations<HTMLDivElement>(itemsRef as React.RefObject<HTMLDivElement[]>);

  return (
    <section className="grid" id="team">
      <div className="flex flex-col items-center" style={{ gridArea: "1/1" }}>
        <Title>{city_title}</Title>

        <div className="grid justify-center grid-cols-2 gap-4 md:grid-cols-3">
          {city_members &&
            city_members.map(
              (
                {
                  city_member_avatar,
                  city_member_description,
                  city_member_name,
                  city_member_socials,
                },
                i
              ) => (
                <Avatar
                  key={i}
                  ref={(e) => (itemsRef.current[i] = e)}
                  avatar={city_member_avatar}
                  name={city_member_name}
                  description={city_member_description}
                  socials={city_member_socials}
                />
              )
            )}
        </div>
      </div>

      <CityBackground
        className="mt-72 md:mt-24 lg:-mt-[60rem]"
        style={{ gridArea: "1/1" }}
      />
    </section>
  );
};
