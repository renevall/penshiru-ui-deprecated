export interface SearchResult {
  id: string;
  fragments?: {
    name: string;
    content: string;
  };
  fields?: {
    name: string;
    content: string;
    type: string;
    law_name: string;
    law_id: number;
  };
}
