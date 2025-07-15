"use client";

import { useEffect, useState } from "react";
import { registerServiceWorker } from "@/utils/registerServiceWorker";
import { askNotificationPermission } from "@/utils/askNotificationPermission";
import { subscribeToPush } from "@/utils/subscribeToPush";
import { Bell, CheckCircle, XCircle } from "lucide-react";

export default function EnablePush() {
    const [enabled, setEnabled] = useState<boolean | null>(null);
    const [checking, setChecking] = useState(true);
    const [denied, setDenied] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && "Notification" in window) {
            setEnabled(Notification.permission === "granted");
            setDenied(Notification.permission === "denied");
        } else {
            setEnabled(false);
            setDenied(false);
        }
        setChecking(false);
    }, []);

    const handleEnable = async () => {
        setDenied(false);
        const permission = await askNotificationPermission();
        if (permission === "granted") {
            await registerServiceWorker();
            await subscribeToPush();
            setEnabled(true);
        } else if (permission === "denied") {
            setDenied(true);
        } else {
            setEnabled(false);
        }
    };

    if (checking || enabled || dismissed) {
        return enabled && !dismissed ? (
            <div className="fixed top-[88px] left-1/2 -translate-x-1/2 z-[1000] min-w-[320px] max-w-lg w-auto">
                <div className="relative flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded shadow-lg animate-fade-in">
                    <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 transition"
                        aria-label="Dismiss notification enabled message"
                        onClick={() => setDismissed(true)}
                    >
                        <XCircle className="w-5 h-5" />
                    </button>
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span className="text-green-700 font-medium">Notifications are enabled!</span>
                </div>
            </div>
        ) : null;
    }

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] max-w-md w-full px-4 flex justify-center animate-fade-in">
            <div className="relative w-full bg-white border border-blue-100 rounded-xl shadow-2xl flex flex-col items-center p-6">
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
                    aria-label="Dismiss notification prompt"
                    onClick={() => setDismissed(true)}
                >
                    <XCircle className="w-5 h-5" />
                </button>
                <Bell className="w-10 h-10 text-blue-500 mb-2 animate-bounce" />
                <h3 className="text-lg font-semibold mb-1 text-blue-700">Enable Push Notifications</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                    Stay updated! Get instant alerts about important updates and reports.<br />
                    Click below to enable browser notifications.
                </p>
                <button
                    onClick={handleEnable}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition shadow"
                >
                    🔔 Enable Notifications
                </button>
                {denied && (
                    <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded p-2 w-full justify-center">
                        <XCircle className="w-4 h-4" />
                        <span>Notifications are blocked in your browser settings.</span>
                    </div>
                )}
            </div>
        </div>
    );
}
