export interface ArticleFeed {
  id: number;

  html: Record<string, string>;
  delta: Record<string, string>;
  name: Record<string, string>;
  short: Record<string, string>;

  image?: string;

  likes: number;
  comments: number;
  isPublished: boolean;

  authorId: string; // Guid is typically represented as a string

  createdAt: Date; // DateTime is usually handled as ISO string
  updatedAt: Date;
}