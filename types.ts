import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  nameZh?: string;
  description: string;
  descriptionZh?: string;
  price: string;
  category: string;
  categoryZh?: string;
  image: string;
  popular?: boolean;
  dietary?: string[];
  chefNote?: string;
  chefNoteZh?: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  platform: 'Instagram' | 'Google';
}

export type IconProps = React.SVGProps<SVGSVGElement>;