import { LocationModel } from "./location.model"
import { OriginModel } from "./origin.model"

export interface ResultModel {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginModel;
    location: LocationModel;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
