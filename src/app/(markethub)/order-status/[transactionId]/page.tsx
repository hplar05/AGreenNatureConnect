import React, { FC, Suspense } from "react";
import prisma from "@/lib/db/db";
import Loading from "../../loading";
import ArrowBack from "../../components/ArrowBack";
import RelativeDate from "@/app/components/RelativeDate";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: { transactionId: string };
}

const page: FC<Props> = async ({ params }) => {
  const transaction = await prisma.transaction.findUnique({
    where: {
      id: params.transactionId,
    },
    include: {
      buyer: true,
      seller: true,
    },
  });

  function getDateFormatted() {
    if (transaction) {
      const date = new Date(transaction.createdAt);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString(undefined, options);
    }
  }

  return (
    <div>
      <div className="relative w-full bg-green px-5 py-3 text-white">
        <h1 className="text-center text-white font-poppins font-bold text-xs sm:text-[1.5rem]">
          Order Details
        </h1>
        <div className="absolute top-3 left-3">
          <ArrowBack />
        </div>
      </div>
      <Suspense fallback={<Loading />}></Suspense>

      <Card className="max-w-xl mx-auto my-8 border border-green-500 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-700 text-center">
            Ref No.{transaction?.referenceId}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 p-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Barangay:</span>
              <span className="text-gray-700">{transaction?.seller.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Date:</span>
              <span className="text-gray-700">{transaction?.updatedAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Time:</span>
              <span className="text-gray-700">{transaction?.updatedAt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Recipient:</span>
              <span className="text-gray-700">{transaction?.buyer.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Status:</span>
              <Badge
                className={`capitalize ${transaction?.status === "APPROVED"
                    ? "bg-lime-500"
                    : transaction?.status === "PENDING"
                      ? "bg-yellow-500"
                      : transaction?.status === "CANCELLED"
                        ? "bg-red-500"
                        : transaction?.status === "PICK_UP"
                          ? "bg-sky-500"
                          : transaction?.status === "COMPLETED"
                            ? "bg-lime-800"
                            : ""
                  }`}
                variant="secondary"
              >
                {transaction?.status}
              </Badge>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2">
              <span className="font-medium text-gray-600">Total:</span>
              <span className="text-gray-700">₱{transaction?.amount}</span>
            </div>
          </div>
          {transaction?.status === "CANCELLED" && (
            <div className="grid gap-4 p-7 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">
                  Cancelled:
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Type:</span>
                <span className="text-gray-700">
                  {transaction?.cancelType === "ChangeOfMind"
                    ? "Change of Mind"
                    : transaction?.cancelType === "FoundBetterDeal"
                      ? "Found Better Deal"
                      : transaction?.cancelType === "PaymentIssues"
                        ? "Payment Issues"
                        : transaction?.cancelType === "AddressVerification"
                          ? "Address Verification"
                          : transaction?.cancelType === "SellerError"
                            ? "Seller Error"
                            : transaction?.cancelType === "NonResponsiveBuyer"
                              ? "Non Responsive Buyer"
                              : transaction?.cancelType === "ViolationOfPolicies"
                                ? "ViolationOf Policies"
                                : transaction?.cancelType === "ShippingRestrictions"
                                  ? "Shipping Restrictions"
                                  : transaction?.cancelType === "ProductDiscontinuation"
                                    ? "Product Discontinuation"
                                    : transaction?.cancelType === "SystemErrors"
                                      ? "System Errors"
                                      : transaction?.cancelType === "OutOfStock"
                                        ? "Out Of Stock"
                                        : transaction?.cancelType === "UnavailabilityOfItem"
                                          ? "Unavailability of Item"
                                          : transaction?.cancelType === "DeliveryDelay"
                                            ? "Delivery Delay"
                                            : transaction?.cancelType === "IncorrectItem"
                                              ? "Incorrect Item"
                                              : transaction?.cancelType === "CommunicationIssues"
                                                ? "Communication Issues"
                                                : ""
                                                  ? "Other Reason"
                                                  : transaction?.cancelType}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="font-medium text-gray-600">Reason:</span>
                <span className="text-gray-700 text-justify">
                  <br /> {transaction?.cancelReason}
                </span>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center p-4 border-t border-gray-200">
          {transaction?.status === "PICK_UP" && (

            <p className="text-sm text-gray-600 italic">
              "Please pick up your purchase on {transaction?.updatedAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at Barangay{" "}
              {transaction?.seller.name} from {transaction?.updatedAt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
              "
            </p>
          )}
        </CardFooter>
      </Card>
      <br />
    </div>
  );
};

export default page;
