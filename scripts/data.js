export const fetchData = async () => {
      try {
            const response = await fetch("./data.json");
            if (!response.ok) {
                  throw new Error(`Network response was not ok: ${response.status}`);
            }
            const data = await response.json();
            console.log("Data fetched from data.json:", data);
            return data;
      } catch (error) {
            console.error("Error fetching data from data.json", error);
            return [];
      }
};