import Home from "./home/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Perniagaan Motor Kekal",
  description: "Authorized motorcycle dealer in Johor Jaya",
  keywords: [
      'kedai motor', 'motor shop', 'motorcycle', 'yamaha dealer', 'kawasaki dealer',
      'motor repair', 'LC135', 'motor shop johor jaya', 'kedai motor johor bahru'
  ]
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
