'use client';
import classNames from "classnames";
import { useFeaturesStore } from "./store";

type FeatureCardProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps;
type CardProps = {
    id: string;
};

function FeatureCard({gradient, children, id}: FeatureCardProps) {
    const inViewFeature = useFeaturesStore((state) => state.inViewFeature);

    return (
        <div className={classNames("absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br", gradient, inViewFeature === id ? "opacity-100" : "opacity-0")}>
            {children}
        </div>
    )
}

// Cards

export const Feed = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#778afe] opacity-100">
            <img src="/phone-ess-home.png" alt="phone" className="phone absolute object-cover" />
        </FeatureCard>
    );
};

export const Peek = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#aa77ff]">
            <img src="/phone-ess-peek.png" alt="phone" className="phone absolute object-cover" />
        </FeatureCard>
    );
};

export const Acad = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#addeff]">
            <img src="/phone-ess-home.png" alt="phone" className="phone absolute object-cover" />
        </FeatureCard>
    );
};

export const Last = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#ecaeaf]">
            <img src="/phone-ess-peek.png" alt="phone" className="phone absolute object-cover" />
            {/* <a href="/" className="flex items-center bg-orange-600 text-white text-lg px-4 h-10 rounded-lg font-semibold hover:bg-orange-700 absolute top-[50%] left-[50%] -translate-x-1/2">Download App</a> */}
        </FeatureCard>
    );
};
