// MARK: business API's
export const createBusiness = async (payload) => {
    const token = localStorage.getItem("token");
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
        const raw = localStorage.getItem("businessData");
        const data = raw ? JSON.parse(raw) : [];
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error parsing business data:", error);
        return [];
    }
};

export const deleteBusinessById = (id) => {
    try {
        const raw = localStorage.getItem("businessData");
        let data = raw ? JSON.parse(raw) : [];

        const updatedData = data.filter((item) => item.id !== id);
        localStorage.setItem("businessData", JSON.stringify(updatedData));
        return updatedData;
    } catch (error) {
        console.error("Error deleting business data:", error);
        return [];
    }
};