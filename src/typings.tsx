export type SocialName = "twitter" | "linkedin";

export type ButtonIcon = "opensea" | "discord" | "none";

export interface Social {
  social_name: SocialName;
  social_url: string;
}

export interface Member {
  member_avatar: string;
  member_description: string;
  member_name: string;
  member_socials: Social[];
}

export interface Milestone {
  milestone_percent: string;
  milestone_text: string;
  milestone_icon: string;
}

export interface Button {
  button_color: string;
  button_icon: ButtonIcon;
  button_text: string;
  button_url: string;
}

export interface Question {
  question: string;
  answer: string;
}

export interface Showcase {
  showcase_unmasked: string;
  showcase_masked: string;
  showcase_url: string;
}

export interface Benefit {
  benefit_title: string;
  benefit_text: string;
}

export interface LandingFrontmatter {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;

  hero_title: string;
  hero_buttons: Button[];
  hero_showcase: Showcase[];

  about_title: string;
  about_text: string;
  team_title: string;
  team_text: string;
  team: Member[];

  roadmap_title: string;
  roadmap_text: string;
  roadmap: Milestone[];

  donations_title: string;
  donations_text: string;
  benefits_title: string;
  benefits: Benefit[];

  faq_title: string;
  faq_questions: Question[];

  mailing_text: string;
}

export interface BlogEntryFrontmatter {
  title: string;
  date: string;
  path: string;
}
