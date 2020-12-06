export interface ICollegeDetails {
    college_name : string;
    promoted: boolean;
    discount: Number;
    original_fees: Number;
    discounted_fees: Number;
    fees_cycle: string;
    image: string;
    ranking: string;
    tags: string[];
    amenties: string[];
    rating: Number;
    rating_remarks: string;
    famous_nearest_places: string,
    nearest_place: string[];
    offertext: string;

}