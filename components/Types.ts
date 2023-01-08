export interface Post {
  img: string;
  location: string;
  distance: string;
}
export interface Search {
  pathname: string;
  query: {
    location: string;
    startDate: string;
    endDate: string;
    noOfGuest: number;
  };
}
export interface CardsType {
  img: string;
  title: string;
}
