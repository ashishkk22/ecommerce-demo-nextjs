import { Button } from "@/components/Button";
import Select from "@/components/Select/Select";
import { Typography } from "@/components/Typography";
import { applyCoupon, ApplyCouponBody, getCoupon } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { queryClient } from "../providers/Providers";

const CardCoupon = () => {
  const { data } = useQuery({
    queryKey: ["getCoupon"],
    queryFn: getCoupon,
  });

  const coupons = data?.coupons?.map((coupon) => coupon.code) ?? [];

  const { data: userInfo } = useSession();

  const [selectedCoupon, setSelectedCoupon] = useState("");

  const { mutate } = useMutation({
    mutationFn: (data: ApplyCouponBody) => applyCoupon(data),
    onSuccess: (data) => {
      queryClient.setQueriesData({ queryKey: ["getCart"] }, () => {
        return data;
      });
    },
  });

  const applyCouponHandler = useCallback(async () => {
    mutate({
      couponCode: selectedCoupon,
      userId: userInfo?.user?.id ?? "",
    });
  }, [mutate, selectedCoupon, userInfo]);

  return (
    <div>
      <Typography variant="h3" className="text-xl mt-6">
        Coupon
      </Typography>
      <div className="flex items-center gap-2">
        <Select
          name="coupon"
          options={coupons}
          showEmptyOption
          emptyOptionLabel="Select a coupon"
          className="w-full py-3 rounded-md"
          value={selectedCoupon}
          onChange={(e) => setSelectedCoupon(e.target.value)}
        />
        <div>
          <Button variant="solid" onClick={applyCouponHandler}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCoupon;
