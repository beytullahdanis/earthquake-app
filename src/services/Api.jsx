const baseURL = import.meta.env.MODE === "development" ? "https://deprem.afad.gov.tr" : "https://sondepremler.netlify.app" 

var startDate = ""
var endDate = ""

function formatDate(date) {
  var isoString = date.toISOString();
  var formattedDate = isoString.replace(/\.\d{3}Z$/, '').replace(' ', 'T');
  return formattedDate;
}

const calculateDates = () => {
  const start = new Date();
  start.setDate(start.getDate() - 1);
  var end = new Date(start);
  end.setDate(end.getDate() + 1);
  return {
    startDate: formatDate(start),
    endDate: formatDate(end),
  };
}

export async function getEarthquakesLast1Day() {
    try {
      const { startDate, endDate } = calculateDates();
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
      const { startDate, endDate } = calculateDates();
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

