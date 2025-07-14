import axios from "axios";
import { AuditData } from "@/types/audit";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://jugnooapp.clevercat.ai/api";
// const API_BASE_URL = "http://localhost:5000/api";

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

interface ChecklistLeadData {
  name: string;
  email: string;
  shopify_store?: string;
  phone?: string;
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

export const submitChecklistLead = async (formData: ChecklistLeadData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_BASE_URL}/lead/clevercat-tech-checklist-lead/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error submitting checklist lead:", error);
    throw error.response?.data || { message: "Failed to submit checklist lead" };
  }
};

export const generateStoreAudit = async (
  storeUrl: string,
  competitorUrl: string,
  name: string,
  email: string,
  phone: string
): Promise<AuditData> => {
  try {
    const response = await axios.post<AuditData>(`${API_BASE_URL}/lead/clevercat-tech-lead-magnet/create`, {
      storeUrl,
      competitorUrl,
      name,
      email,
      phone
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error generating store audit:", error);
    throw error.response?.data || { message: "Failed to generate store audit" };
  }
};