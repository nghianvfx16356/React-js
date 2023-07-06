export const fetchBoardData = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/v1/boards/${id}`);
    const data = await response.json();
    setColumns(data.columns);
  } catch (error) {
    console.log("Error fetching board data:", error);
  }
};
