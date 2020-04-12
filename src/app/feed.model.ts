export class FeedModel {
  title: string;
  description: string;
  tags: any[];
  samples: SampleModel[];
}

export class SampleModel {
  id = new Date().getTime();
  title: string;
  description: string;
  usage: string;
  sampleCode: string;
  urlImage = 'https://via.placeholder.com/150';
  linkGitHub: string;
}
