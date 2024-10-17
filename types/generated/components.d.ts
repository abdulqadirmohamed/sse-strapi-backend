import type { Struct, Schema } from '@strapi/strapi';

export interface FeaturesRichText extends Struct.ComponentSchema {
  collectionName: 'components_features_rich_texts';
  info: {
    displayName: 'rich-text';
    icon: 'collapse';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface FeaturesMedia extends Struct.ComponentSchema {
  collectionName: 'components_features_media';
  info: {
    displayName: 'media';
    icon: 'database';
  };
  attributes: {
    photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.rich-text': FeaturesRichText;
      'features.media': FeaturesMedia;
    }
  }
}
