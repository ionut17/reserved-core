import { Item } from "../item.model";
import { ReservationStatus } from "./reservation-status.enum";
import { Client } from "../client.model";

export class ReservationExtended extends Item {
	people: number;
	client: Client;
	restaurantId: string;
	startTime: Date;
	endTime: Date;
	status: ReservationStatus;
	tables: Array<string>;
	notes?: string;
}