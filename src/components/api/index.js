import RoutingPaths from "../../helper/routingPaths";

// MARK: business API's
export const createBusiness = async (payload) => {
    const token = localStorage.getItem("session");
    if (!token) return;

    const existing = JSON.parse(localStorage.getItem("businessData")) || [];
    const businessArray = Array.isArray(existing) ? existing : [];

    const newEntry = { id: Date.now(), ...payload };
    const updatedData = [...businessArray, newEntry];

    localStorage.setItem("businessData", JSON.stringify(updatedData));
};

export const updateBusiness = async (id, payload) => {
    const session = localStorage.getItem("session");
    if (!session) return;

    let data = JSON.parse(localStorage.getItem("businessData")) || [];
    data = Array.isArray(data) ? data : [];

    const updated = data.map((item) =>
        item.id === id ? { ...item, ...payload } : item
    );

    localStorage.setItem("businessData", JSON.stringify(updated));
};

export const getBusinessData = () => {
    try {
        const data =  JSON.parse(localStorage.getItem("businessData")) || [];
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error parsing business data:", error);
        return [];
    }
};

export const deleteBusinessById = (id) => {
    try {
      let data  = JSON.parse(localStorage.getItem("businessData")) || [];
        const updatedData = data.filter((item) => item.id !== id);
        localStorage.setItem("businessData", JSON.stringify(updatedData));
        return updatedData;
    } catch (error) {
        console.error("Error deleting business data:", error);
        return [];
    }
};

// MARK: count business
export function getItemCountFromLocalStorage(key) {
    const dataFromStorage = localStorage.getItem(key);
    if (!dataFromStorage) return 0;
  
    try {
      const parsedArray = JSON.parse(dataFromStorage);
      if (Array.isArray(parsedArray)) {
        return parsedArray.length;
      } else {
        console.error('Data is not an array');
        return 0;
      }
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return 0;
    }
  }

  export const signOutUser = (navigate, toast) => {
    try {
      const session = localStorage.getItem("session");
      if (session) {
        localStorage.clear();
        navigate(RoutingPaths.login, { replace: true });
      }
    } catch (error) {
      if (toast) toast.error(error.message || "Error signing out.");
    }
  };