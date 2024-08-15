import Image from "next/image";

export const SocialComponent = () => {
  const socialLink = [
    {
      id: 1,
      imgPath: "/google.svg",
      title: "Google",
      width: 24,
      height: 24,
    },
    {
      id: 2,
      imgPath: "/metamask.svg",
      title: "Metamask",
      width: 24,
      height: 24,
    },
    {
      id: 3,
      imgPath: "/ethereum.svg",
      title: "Ethereum",
      width: 20,
      height: 20,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center btn-style my-1 gap-3">
      {socialLink.map((linkItem) => (
        <div
          className="flex items-center bg-white shadow px-3 py-1.5 rounded-sm cursor-pointer"
          key={linkItem.id}
        >
          <Image
            src={linkItem.imgPath}
            alt={linkItem.title}
            width={linkItem.width}
            height={linkItem.height}
            style={
              linkItem.title === "Ethereum"
                ? { width: "20px", height: "20px" }
                : { width: "24px", height: "24px" }
            }
            priority
          />
          <p className="ml-2 text-sm">{linkItem.title}</p>
        </div>
      ))}
    </div>
  );
};
