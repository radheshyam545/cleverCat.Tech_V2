import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://jugnooapp.clevercat.ai/api";
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  shopify_store: string;
  phone: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  [key: string]: any; // Allow additional properties from API response
}

export const submitContactForm = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_BASE_URL}/lead/clevercat-tech/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    throw error.response?.data || { message: "Failed to submit form" };
  }
};