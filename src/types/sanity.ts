interface SanityBlockChild {
    _type: string;
    _key: string;
    text: string;
  }
  
  interface SanityBlock {
    _type: string;
    _key: string;
    style: string;
    markDefs: any[];
    children: SanityBlockChild[];
    listItem?: string;
    level?: number;
  }
  
  interface PostContent extends Array<SanityBlock> {}
  
  interface SanityImage {
    _type: string;
    asset: {
      _ref: string;
    };
    alt?: string;
    caption?: string;
  }