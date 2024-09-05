import Home from "./home/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Perniagaan Motor Kekal - Leading Motorcycle Dealer in Johor Bahru, Johor Bahru",
  description: "Perniagaan Motor Kekal is Johor Bahru's trusted motorcycle dealer offering sales, repairs, and accessories for brands like Yamaha and Kawasaki.",
  keywords: [
      'kedai motor', 'motor shop', 'motorcycle', 'yamaha dealer', 'kawasaki dealer',
      'motor repair', 'LC135', 'motor shop Johor Bahru', 'kedai motor johor bahru', 'kedai jual motor Johor Bahru'
  ]
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
