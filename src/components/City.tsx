import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Blob } from "../components/Blob";
import { Member } from "../typings";
import { Avatar } from "./Avatar";
import { Markdown } from "./Markdown";
import { Title } from "./Title";

interface Props {
  about_title: string;
  about_text: string;

  team_title: string;
  team_text: string;
  team: Member[];
}

export const City: React.FC<Props> = ({
  about_title,
  about_text,
  team_title,
  team_text,
  team,
}) => {
  return (
    <>
      <Blob>
        <div className="flex flex-col items-center gap-8 p-4 md:flex-row">
          <div id="about">
            <Title>{about_title}</Title>
            <Markdown>{about_text}</Markdown>
          </div>

          <div className="w-full h-2 bg-green-400 rounded md:w-2 md:h-48"></div>

          <div id="team">
            <Title>{team_title}</Title>
            <Markdown>{team_text}</Markdown>
          </div>
        </div>
      </Blob>

      <section className="relative">
        <div className="flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto">
          <div className="justify-center gap-4 fancy-2grid md:fancy-3grid">
            {team &&
              team.map(
                (
                  {
                    member_avatar: avatar,
                    member_description: description,
                    member_name: city_member_name,
                    member_socials: socials,
                  },
                  i
                ) => (
                  <Avatar
                    key={i}
                    className="fancy-2item md:fancy-3item"
                    avatar={avatar}
                    name={city_member_name}
                    description={description}
                    socials={socials}
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
