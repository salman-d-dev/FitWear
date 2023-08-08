export default function Product({params}) {
  const {slug} = params;
  return <p>Post: slug is : {slug}</p>
}