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

export interface UserProfileMenuItem {
  label: string;
  icon: string;
  action?: () => void;
  divider?: boolean;
}

export interface UserProfileData {
  name: string;
  email: string;
  avatar: string;
}
