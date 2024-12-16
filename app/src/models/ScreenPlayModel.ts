import { Client } from "./ClientModel";
import { Trail } from "./TrailModel";

export interface ScreenPlay {
  id: string;
  title: string;
  content: string;
  createdOn: Date;
  lastUpdatedOn: Date;
  trail: Array<Trail>;
  client: Client;
};
