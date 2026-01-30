export interface Work {
  id: number | string;
  title: string;
  type: string;
  year: string;
  description: string;
  image: string;
  scope: string[];
  tech: string[];
  status?: "archived" | "active";
}
