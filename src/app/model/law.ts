export interface Law {
  id: number;
  name: string;
  //   books: Book[];
  //   titles: Title[];
  approvalDate: Date;
  publishDate: Date;
  journal: string;
  intro: string;
  init: string;
}

interface LawJSON {
  id: number;
  name: string;
  //   titles: Title[];
  approvalDate: Date;
  publishData: Date;
  journal: string;
  intro: string;
}
