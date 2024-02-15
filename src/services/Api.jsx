const baseURL = import.meta.env.MODE === "development" ? "https://deprem.afad.gov.tr" : "https://sondepremler.netlify.app" 

console.log(baseURL)

const currentDate = new Date();
const endDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 1}`;

const oneDayAgo = new Date();
oneDayAgo.setDate(currentDate.getDate() - 1);
const startDate = `${oneDayAgo.getFullYear()}-${oneDayAgo.getMonth() + 1}-${oneDayAgo.getDate()}`;


export async function getEarthquakesLast1Day() {
    try {
      const response = await fetch(`/apiv2/event/filter?start=${startDate}&end=${endDate}&orderby=timedesc`)
      if (!response.ok) {
        throw new Error("Failed to get earthquakes!");
      }
      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error("Error fetching earthquakes: ", error);
      return [];
    }
  }

  export async function getLastEarthquake() {
    try {
      const response = await fetch(`/apiv2/event/filter?start=${startDate}&end=${endDate}&orderby=timedesc`)
      if (!response.ok) {
        throw new Error("Failed to get last earthquake!");
      }
      const data = await response.json();
      return data[0] || [];
    } catch (error) {
      console.error("Error fetching earthquake: ", error);
      return [];
    }
  }

