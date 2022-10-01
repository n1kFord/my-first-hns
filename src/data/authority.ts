import founderImagePath from "../images/founder.svg";
import moderatorImagePath from "../images/moderator.svg";
import specialImagePath from "../images/special.svg";
import mapperImagePath from "../images/mapper.svg";

export interface IStaff {
  image: string;
  rating: number;
  role: string;
  name: string;
}

const staffList: IStaff[] = [
  {
    image: founderImagePath,
    rating: 3,
    role: "founder",
    name: "five5laps",
  },
  {
    image: moderatorImagePath,
    rating: 2,
    role: "moderator",
    name: "oneUp",
  },
  {
    image: specialImagePath,
    rating: 1,
    role: "special",
    name: "WN4m3",
  },
  {
    image: mapperImagePath,
    rating: 1,
    role: "mapper",
    name: "nyushiri",
  },
];

export default staffList;
