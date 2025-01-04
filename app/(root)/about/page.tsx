import Hello from "@/app/components/hello";
export default function About() {
  console.log("Home");
  return (
    <>
     <h1 className="text-3xl">About page</h1>

     <Hello />
    </>
   
  );
}