export interface Goal {
  id?: string;
  title: string;
  description: string;
  deadline: string;
  isPublic: boolean;
  parentId: string | null;
  order: number;
  publicId?: string;
}
