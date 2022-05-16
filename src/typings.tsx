export type SocialName = "twitter" | "linkedin";

export type ButtonIcon = "opensea" | "discord" | "none";

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
  forest_milestone_percent: string;
  forest_milestone_text: string;
}

export interface ForestShowcase {
  forest_showcase_image: string;
  forest_showcase_url: string;
}

export interface HeroButton {
  hero_button_color: string;
  hero_button_icon: ButtonIcon;
  hero_button_text: string;
  hero_button_url: string;
}

export interface FAQQuestion {
  faq_question: string;
  faq_answer: string;
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
  hero_showcase: HeroShowcase[];

  about_title: string;
  about_text: string;

  city_title: string;
  city_text: string;
  city_members: CityMember[];

  forest_title: string;
  forest_text: string;
  forest_milestones: ForestMilestone[];

  planets_title: string;
  planets_text: string;

  pool_title: string;
  pool_text: string;

  faq_title: string;
  faq_questions: FAQQuestion[];

  mailing_text: string;
}

export interface BlogEntryFrontmatter {
  title: string;
  date: string;
  path: string;
}
