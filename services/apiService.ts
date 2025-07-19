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

interface CashbackLeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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

export const submitCashbackLead = async (lead: CashbackLeadData): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    formData.append("firstName", lead.firstName);
    formData.append("lastName", lead.lastName);
    formData.append("email", lead.email);
    formData.append("phone", lead.phone);

    const response = await axios.post<ApiResponse>(
      `${API_BASE_URL}/cashback-leads`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error submitting cashback lead:", error);
    throw error.response?.data || { message: "Failed to submit cashback lead" };
  }
};

export const generateStoreAudit = async (
  storeUrl: string,
  competitorUrl: string,
  name: string,
  email: string,
  phone: string,
  subscription: any

): Promise<AuditData> => {

  const formData = new FormData();
  formData.append("storeUrl", storeUrl);
  formData.append("competitorUrl", competitorUrl);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("subscription", JSON.stringify(subscription)); // 👈 must stringify


  try {
    const response = await axios.post<AuditData>(`${API_BASE_URL}/lead/clevercat-tech-lead-magnet/create`,
      formData,
      //    {
      //   storeUrl,
      //   competitorUrl,
      //   name,
      //   email,
      //   phone,
      //   subscription
      // },
      {
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