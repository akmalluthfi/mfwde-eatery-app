import data from "../../DATA.json";

export default class RestaurantRepository {
	get restaurants() {
		return data.restaurants;
	}
}
