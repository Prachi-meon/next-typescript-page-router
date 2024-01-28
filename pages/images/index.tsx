import Image from "next/image";
import tirza from "../../public/tirza.jpg";
import austin from "../../public/austin.jpg";

const Images = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image
        src={austin}
        alt=""
        width={300}
        height={300}
        style={{ padding: "40px" }}
        placeholder="blur"
      />
      <Image
        src={tirza}
        alt=""
        width={300}
        height={300}
        style={{ padding: "40px" }}
      />
      <img
        src="carson.jpg"
        alt=""
        width="300px"
        height="300px"
        style={{ padding: "40px" }}
      />
    </div>
  );
};

export default Images;
