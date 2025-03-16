export interface AddMenuItem {
  label: string;
  icon: string;
  action: () => void;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: 'notification' | 'announcement';
}
