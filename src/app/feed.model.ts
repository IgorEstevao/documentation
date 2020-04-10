export class FeedModel {
  title: string;
  category: string;
  description: string;
  allSytaxes: string;
  samples: SampleModel[];
}

export class SampleModel {
  id = new Date().getTime();
  subCategory: string;
  howToUse: string;
  sampleCode: string;
  urlImage: string;
}