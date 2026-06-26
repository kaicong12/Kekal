import { setRequestLocale } from "next-intl/server";
import Home from "./home/page";
import Wrapper from "@/app/layout/wrapper";

export default function MainRoot({ params: { locale } }) {
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
