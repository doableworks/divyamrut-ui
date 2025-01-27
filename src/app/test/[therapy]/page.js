import TestCom from "@/components/test/TestCom"

const page = ({params}) => {


  return (
    <div className="common_page_width">
        <TestCom params={params} />
    </div>
  )
}

export default page