import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Blob } from "../components/Blob";
import { CityMember } from "../typings";
import { Avatar } from "./Avatar";
import { Markdown } from "./Markdown";
import { Title } from "./Title";

interface Props {
  city_title: string;
  city_text: string;
  city_members: CityMember[];
}

export const City: React.FC<Props> = ({
  city_title,
  city_text,
  city_members,
}) => {
  return (
    <>
      <Blob id="team">
        <Title>{city_title}</Title>
        <Markdown>{city_text}</Markdown>
      </Blob>

      <section className="relative">
        <div className="flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto">
          <div className="justify-center gap-4 fancy-2grid md:fancy-3grid">
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
                    className="fancy-2item md:fancy-3item"
                    avatar={city_member_avatar}
                    name={city_member_name}
                    description={city_member_description}
                    socials={city_member_socials}
                  />
                )
              )}
          </div>
        </div>

        <StaticImage
          className="!absolute w-full -bottom-[10%] lg:-bottom-[20%] -z-10"
          src="../images/city/sm_empty.png"
          alt=""
        />
      </section>
    </>
  );
};
