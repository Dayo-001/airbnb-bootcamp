import { create } from "zustand";

type ReservationCalendarDialogState = {
  isOpen: boolean;
};

type ReservationCalendarDialogAction = {
  open: () => void;
  close: () => void;
};

const initialState: ReservationCalendarDialogState = {
  isOpen: false,
};

const useReservationCalendarDialogStore = create<
  ReservationCalendarDialogState & ReservationCalendarDialogAction
>((set) => ({
  ...initialState,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useReservationCalendarDialogStore;
