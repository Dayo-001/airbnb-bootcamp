import { create } from "zustand";

type GuestFilterDialogState = {
  isOpen: boolean;
};

type GuestFilterDialogAction = {
  open: () => void;
  close: () => void;
};

const initialState: GuestFilterDialogState = {
  isOpen: false,
};

const useGuestFilterDialogStore = create<
  GuestFilterDialogState & GuestFilterDialogAction
>((set) => ({
  ...initialState,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useGuestFilterDialogStore;
