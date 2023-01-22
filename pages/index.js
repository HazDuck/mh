import Detail from "../modules/property-details";
import {Banner} from "../components/banner"

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3333/api/account')
  if (res?.ok) {
    const data  = await res.json()
    return {
      props: {accountData: data}
    }
  } else {
    throw new Error('Something went wrong');
  }
}

export default function PropertyDetails({accountData}) {
  return (
    <>
      <Banner>Property Details</Banner>
      <Detail accountData={accountData}/>
    </>   
  );
}
