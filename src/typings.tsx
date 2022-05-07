export type SocialName = "twitter" | "linkedin";

export type ButtonIcon = "opensea" | "discord" | "none";

export type Direction = "left" | "right";

export interface CityTeamMemberSocial {
  social_name: SocialName;
  social_url: string;
}

export interface CityTeamMember {
  member_avatar: string;
  member_description: string;
  member_name: string;
  member_social: CityTeamMemberSocial[];
}

export interface ForestRoadmapMilestoneButton {
  roadmap_button_color: string;
  roadmap_button_icon: ButtonIcon;
  roadmap_button_text: string;
  roadmap_button_url: string;
}

export interface ForestRoadmapMilestone {
  roadmap_image: string;
  roadmap_direction: Direction;
  roadmap_title: string;
  roadmap_text: string;
  roadmap_buttons: ForestRoadmapMilestoneButton[];
}

export interface HeroButton {
  button_color: string;
  button_icon: ButtonIcon;
  button_text: string;
  button_url: string;
}

export interface PoolQuestion {
  pool_question: string;
  pool_answer: string;
}

export interface LandingFrontmatter {
  about_text: string;
  about_title: string;
  city_title: string;
  pool_title: string;
  planets_text: string;
  planets_title: string;
  hero_title: string;
  forest_title: string;
  city_team: CityTeamMember[];
  forest_roadmap: ForestRoadmapMilestone[];
  hero_buttons: HeroButton[];
  pool_questions: PoolQuestion[];
}
