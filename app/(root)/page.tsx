import Hello from "@/app/components/hello";
export default function Home() {
  console.log("Home");
  return (
    <>
     <h1 className="text-3xl">Welcome to next js</h1>

     <Hello />
    </>
   
  );
}
