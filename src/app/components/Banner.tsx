import Link from "next/link";

type props ={
  heading :string;
}

function Banner({heading} :props) {
  return (
    <div className=" flex items-center justify-between">
    <div  className="text-3xl font-bold text-white ml-4 lg:ml-0 grid lg:place-content-start place-content-center">
        <h1>{heading}</h1>
    </div>
    </div>
  )
}

export default Banner