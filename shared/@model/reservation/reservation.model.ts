import { Item } from "../item.model";
import { ReservationStatus } from "./reservation-status.enum";
import { Client } from "../client.model";

export class Reservation extends Item {
	people: number;
	clientId: string;
	restaurantId: string;
	startTime: Date | string;
	endTime: Date | string;
	status: ReservationStatus;
	tables: Array<string>;
	notes?: string;
}