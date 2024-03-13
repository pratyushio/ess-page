import { Acad, Feed, Last, Peek } from "./FeatureCard"
import FeatureTitle from "./FeatureTitle"

const features = [
    {id: 1, title: "Feed: Engage with students from different institutes", card: Feed},
    {id: 2, title: "Peek: Share your peek moment of the day and watch others", card: Peek},
    {id: 3, title: "Acad: Get updated with happenings in and out of your institute", card: Acad},
    {id: 4, title: "Essential: It's all about networking and getting things done the right way", card: Last},
]

export default function Features() {
  return (
    <section className="relative w-screen bg-orange-50">
        <div className="mx-auto max-w-7xl px-4">
            {/* start */}
            <div className="flex w-full gap-20 items-start max-sm:flex-col-reverse max-sm:gap-40">
                <div className="w-full py-[30vh] max-sm:py-0 max-sm:px-4 max-sm:pb-48">
                    <ul>
                        {features.map((feature) => (
                            // @ts-ignore
                            <li key={feature.id}><FeatureTitle id={feature.id}>
                                    {feature.title}
                                </FeatureTitle>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sticky top-0 h-screen w-full flex items-center max-sm:h-[40%] max-sm:py-4">
                    <div className="relative aspect-square w-full rounded-2xl">
                        {features.map((feature) => (
                            // @ts-ignore
                            <feature.card id={feature.id} key={feature.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
