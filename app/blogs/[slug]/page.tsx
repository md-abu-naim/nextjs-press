
const DynamicPage = async({params}: {params: Promise<{slug: string}>}) => {
    const {slug} = await params
  return (
    <div>DynamicPage{slug}</div>
  )
}

export default DynamicPage