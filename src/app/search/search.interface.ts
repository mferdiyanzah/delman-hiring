import { IUsers } from "@/shared/types";

export interface DetailUserModalProps {
  data: IUsers;
  isOpen: boolean;
  onClose: () => void;
}
