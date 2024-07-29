declare interface SiderbarProps {
  user: User;
}

declare type User = {
  $id: string;
  email: string;
  name: string;
};