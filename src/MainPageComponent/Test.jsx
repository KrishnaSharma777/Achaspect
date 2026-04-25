import { db } from "../firebase";

const Test = () => {
  console.log("Firebase connected", db);
  return <h1>Firebase Connected ✅</h1>;
};

export default Test;