# Useless code

```tsx
import Navbar from "../../../Components/Navbar";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="relative flex flex-col">
      <div className="w-full absolute top-0 left-0 z-50 bg-transparent">
        <Navbar />
      </div>{" "}
      <Banner />
    </div>
  );
};

export default Home;
```
