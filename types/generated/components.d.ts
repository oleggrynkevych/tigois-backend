import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorAuthors extends Schema.Component {
  collectionName: 'components_author_authors_s';
  info: {
    displayName: 'Authors ';
    icon: 'user';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface MaterialsMaterial extends Schema.Component {
  collectionName: 'components_materials_materials';
  info: {
    displayName: 'Material';
    icon: 'database';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'author.authors': AuthorAuthors;
      'materials.material': MaterialsMaterial;
    }
  }
}
