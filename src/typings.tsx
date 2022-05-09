export type SocialName = "twitter" | "linkedin";

export type ButtonIcon = "opensea" | "discord" | "none";

export type Direction = "left" | "right";

export interface CityMemberSocial {
  city_member_social_name: SocialName;
  city_member_social_url: string;
}

export interface CityMember {
  city_member_avatar: string;
  city_member_description: string;
  city_member_name: string;
  city_member_socials: CityMemberSocial[];
}

export interface ForestMilestoneButton {
  forest_milestone_button_color: string;
  forest_milestone_button_icon: ButtonIcon;
  forest_milestone_button_text: string;
  forest_milestone_button_url: string;
}

export interface ForestMilestone {
  forest_milestone_image: string;
  forest_milestone_direction: Direction;
  forest_milestone_title: string;
  forest_milestone_text: string;
  forest_milestone_buttons: ForestMilestoneButton[];
}

export interface HeroButton {
  hero_button_color: string;
  hero_button_icon: ButtonIcon;
  hero_button_text: string;
  hero_button_url: string;
}

export interface PoolQuestion {
  pool_question: string;
  pool_answer: string;
}

export interface HeroShowcase {
  hero_showcase_unmasked: string;
  hero_showcase_masked: string;
  hero_showcase_url: string;
}

export interface LandingFrontmatter {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;

  hero_title: string;
  hero_buttons: HeroButton[];
  hero_showcase_title: string;
  hero_showcase: HeroShowcase[];

  about_text: string;
  about_title: string;

  city_title: string;
  city_members: CityMember[];

  forest_title: string;
  forest_milestones: ForestMilestone[];

  planets_text: string;
  planets_title: string;

  pool_title: string;
  pool_questions: PoolQuestion[];
}
