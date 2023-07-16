"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

const LoadMore = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  //   hasPreviousePage,
  hasNextPage,
}: Props) => {
  const handleNavigation = (direction: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    if (direction === "next" && hasNextPage) {
      currentParams.delete("startcursor");
      currentParams.set("endcursor", endCursor);
    } else if (direction === "first" && hasPreviousPage) {
      currentParams.delete("endcursor");
      currentParams.set("startcursor", startCursor);
    }

    const newSearchParams = currentParams.toString();
    const newPathName = `${window.location.pathname}?${newSearchParams}`;
    router.push(newPathName);
  };
  const router = useRouter();
  return (
    <div className=" flex mt-20 w-full justify-center gap-10">
      {hasPreviousPage && (
        <Button
          title="Back"
          handleClick={() => handleNavigation("first")}
        ></Button>
      )}
      {hasNextPage && (
        <Button
          title="Next"
          handleClick={() => handleNavigation("next")}
        ></Button>
      )}
    </div>
  );
};

export default LoadMore;
