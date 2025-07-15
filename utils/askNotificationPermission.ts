export async function askNotificationPermission(): Promise<NotificationPermission> {
    const permission = await Notification.requestPermission();
    return permission;
  }
  