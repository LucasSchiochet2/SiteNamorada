export interface ICardWithIcons {
  svgId: string;
  title: string;
  link: string;
  target?: string;
  smaller?: boolean;
}

export interface ICardNews {
  image: string;
  title: string;
  link: string;
  category: string[];
  smaller?: boolean;
  published_at?: {
    date: string; 
    hour?: string; 
};
}

export interface ICardClergy {
  id: number;
  name: string;
  image?: {
    crop: string;
    original: string;
  };
  occupation: string | null;
  extra_information?: {
    key: string;
    value: string;
  }[];
}

export interface IGovernanceClergy {
  id: number;
  name: string;
  image?: {
    crop: string;
    original: string;
  };
  occupation: string;
  biography?: string;
  extra_information?: {
    key: string;
    value: string;
  }[];
}
