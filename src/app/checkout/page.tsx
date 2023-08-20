import Input from "@/components/Input";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen px-24 py-12">
      <h1 className="font-bold my-3">Billing details</h1>
      <form className="w-full border-2 rounded-lg px-4 py-8 flex gap-2">
        <div className="flex flex-col w-1/2 px-2">
          <Input name="Name" placeholder="John Doe" type="text" />
          <Input name="Company name" placeholder="Company" type="text" />
          <Input
            name="Country"
            placeholder=""
            type="text"
            value="South Africa"
          />
          <Input name="Town / City" placeholder="Cape Town" type="text" />
        </div>
        <div className="flex flex-col w-1/2 px-2">
          <Input name="Postcode" placeholder="1234567" type="number" />
          <Input name="Phone" placeholder="+27" type="number" />
          <Input
            name="Email address"
            placeholder="johndoe@gmail.com"
            type="text"
          />
          <Input
            name="Additional information"
            placeholder="Notes about your order"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
