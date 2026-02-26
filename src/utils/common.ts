export const captializeFirstLetter = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCardTyopeColor = (cardType: string) => {
  switch (cardType) {
    case "burner":
      return "bg-orange-100 text-orange-700";
    case "subscription":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "  text-green-700";
    case "inactive":
      return "  text-gray-700";
    case "blocked":
      return "  text-red-700";
    default:
      return "  text-gray-700";
  }
};

export const statusIconColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "inactive":
      return "bg-gray-500";
    case "blocked":
      return "bg-red-500";
    default:
      return "bg-gray-100";
  }
};
