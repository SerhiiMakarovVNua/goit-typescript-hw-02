export interface Photo {
  id: number;
  url: string;
  urls: {
    small: string;
    regular: string;
  };
  title: string;
  thumbnail: string;
  alt_description: string;
}

export interface Data {
  results: Photo[];
  total: number;
  total_pages: number;
}