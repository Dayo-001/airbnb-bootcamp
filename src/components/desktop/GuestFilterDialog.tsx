import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { MinusCircle, PlusCircle } from "lucide-react";
import useGuestFilterStore from "@/hooks/use-guest-filter-store";
import useGuestFilterDialogStore from "@/hooks/use-guest-filter-dialog";
import toast from "react-hot-toast";

type Props = {};

const GuestFilterDialog = (props: Props) => {
  const {
    adultsCount,
    childrenCount,
    infantsCount,
    petsCount,
    increaseAdultsCount,
    increaseChildrenCount,
    increaseInfantsCount,
    increasePetsCount,
    decreaseAdultsCount,
    decreaseChildrenCount,
    decreaseInfantsCount,
    decreasePetsCount,
  } = useGuestFilterStore();

  const { isOpen, close } = useGuestFilterDialogStore();
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="rounded-2xl">
        <DialogTitle className="text-center">Change Guests</DialogTitle>
        <p className="text-xs text-muted-foreground">
          This place has a maximum of 1 guest, not including infants. Pets are
          not allowed
        </p>
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-2 gap-2 rounded-lg hover:cursor-pointer">
            <div className="w-1/2">
              <p className="text-sm font-semibold">Adults</p>
              <p className="text-xs"> Ages 13 and above</p>
            </div>
            <div className="flex w-1/2 gap-3 justify-end select-none">
              <MinusCircle
                onClick={() => {
                  if (
                    (childrenCount > 0 || infantsCount > 0 || petsCount > 0) &&
                    adultsCount === 1
                  ) {
                    toast.error("An adult must be present");
                    return;
                  }
                  decreaseAdultsCount();
                }}
                size={20}
                className={`text-gray-300 ${
                  adultsCount === 0 ||
                  (adultsCount === 1 &&
                    (childrenCount > 0 || infantsCount > 0 || petsCount > 0))
                    ? "hover:cursor-not-allowed hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-500"
                }`}
              />
              <p className="tabular-nums text-gray-900 text-sm text-center w-[2ch] shrink-0">
                {adultsCount}
              </p>
              <PlusCircle
                onClick={increaseAdultsCount}
                size={20}
                className="text-gray-400 hover:text-gray-500"
              />
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center p-2 gap-2 rounded-lg hover:cursor-pointer">
            <div className="w-1/2 ">
              <p className="text-sm font-semibold">Children</p>
              <p className="text-xs"> Ages 2 - 12</p>
            </div>
            <div className="flex gap-3 w-1/2 justify-end select-none">
              <MinusCircle
                onClick={decreaseChildrenCount}
                size={20}
                className={`text-gray-300 ${
                  childrenCount === 0
                    ? "hover:cursor-not-allowed hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-500"
                }`}
              />
              <p className="tabular-nums text-gray-900 text-sm text-center w-[2ch] shrink-0">
                {childrenCount}
              </p>
              <PlusCircle
                onClick={() => {
                  if (adultsCount === 0) {
                    increaseAdultsCount();
                  }
                  increaseChildrenCount();
                }}
                size={20}
                className="text-gray-400 hover:text-gray-500 "
              />
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center p-2 gap-2 rounded-lg hover:cursor-pointer">
            <div className="w-1/2 ">
              <p className="text-sm font-semibold">Infants</p>
              <p className="text-xs"> Ages 0 - 2</p>
            </div>
            <div className="flex gap-3 w-1/2 justify-end select-none">
              <MinusCircle
                onClick={decreaseInfantsCount}
                size={20}
                className={`text-gray-300 ${
                  infantsCount === 0
                    ? "hover:cursor-not-allowed hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-500"
                }`}
              />
              <p className="tabular-nums text-gray-900 text-sm text-center w-[2ch] shrink-0">
                {infantsCount}
              </p>
              <PlusCircle
                onClick={() => {
                  if (adultsCount === 0) {
                    increaseAdultsCount();
                  }
                  increaseInfantsCount();
                }}
                size={20}
                className="text-gray-400 hover:text-gray-500 "
              />
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center p-2 gap-2 rounded-lg hover:cursor-pointer">
            <div className="w-1/2 ">
              <p className="text-sm font-semibold">Pets</p>
              <p className="text-xs">Bringing a service animal?</p>
            </div>
            <div className="flex gap-3 w-1/2 justify-end select-none">
              <MinusCircle
                onClick={decreasePetsCount}
                size={20}
                className={`text-gray-300 ${
                  petsCount === 0
                    ? "hover:cursor-not-allowed hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-500"
                }`}
              />
              <p className="tabular-nums text-gray-900 text-sm text-center w-[2ch] shrink-0">
                {petsCount}
              </p>
              <PlusCircle
                onClick={() => {
                  if (adultsCount === 0) {
                    increaseAdultsCount();
                  }
                  increasePetsCount();
                }}
                size={20}
                className="text-gray-400 hover:text-gray-500 "
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuestFilterDialog;
