import {SupportedGames} from "@/games";

export default function Page({params}:{params:{title:string}}) {
  const {title} = params
  return <h1>{title}</h1>
}

export async function generateStaticParams() {
  return SupportedGames.map(({title}) => ({
    title: encodeURIComponent(title),
  }))
}
